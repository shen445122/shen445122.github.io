import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';

const repoRoot = process.cwd();
const sourceGlob = '_posts/**/*.md';
const outputDir = path.join(repoRoot, 'src/content/posts/legacy');

function parseDateParts(filePath) {
  const fileName = path.basename(filePath, '.md');
  const match = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);

  if (!match) {
    return {
      date: '2016-01-01T00:00:00.000Z',
      slug: fileName,
      year: '2016'
    };
  }

  const [, year, month, day, slug] = match;
  return {
    date: new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString(),
    slug,
    year
  };
}

function normalizeList(value) {
  if (!value) return [];
  const values = Array.isArray(value) ? value : String(value).split(/[、,，]/);
  return values.map((item) => String(item).trim()).filter(Boolean);
}

function removeUndefined(value) {
  if (Array.isArray(value)) {
    return value.map(removeUndefined);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, nested]) => nested !== undefined)
        .map(([key, nested]) => [key, removeUndefined(nested)])
    );
  }

  return value;
}

async function main() {
  const files = await fg(sourceGlob, { cwd: repoRoot, absolute: true });
  const seen = new Set();

  await fs.rm(outputDir, { recursive: true, force: true });
  await fs.mkdir(outputDir, { recursive: true });

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const relativeLegacyPath = path.relative(repoRoot, file).replaceAll(path.sep, '/');
    const { date, slug, year } = parseDateParts(file);

    if (seen.has(slug)) {
      throw new Error(`Duplicate slug detected while syncing legacy posts: ${slug}`);
    }

    seen.add(slug);

    const frontmatter = {
      title: String(data.title ?? slug),
      description: data.description ? String(data.description).trim() : '',
      category: data.category ? String(data.category).trim() : 'Writing',
      tags: normalizeList(data.tags),
      keywords: normalizeList(data.keywords),
      version: data.version != null ? String(data.version) : undefined,
      legacyLayout: data.layout ? String(data.layout) : undefined,
      legacyPath: relativeLegacyPath,
      slug,
      year,
      date,
      books: Array.isArray(data.books)
        ? data.books.map((book) => ({
            title: book?.title ? String(book.title) : '',
            status: book?.status ? String(book.status) : undefined,
            author: book?.author ? String(book.author) : undefined,
            publisher: book?.publisher ? String(book.publisher) : undefined,
            language: book?.language ? String(book.language) : undefined,
            link: book?.link ? String(book.link) : undefined,
            cover: book?.cover ? String(book.cover) : undefined,
            description: book?.description ? String(book.description) : undefined,
            review: book?.review ? String(book.review) : undefined
          }))
        : undefined
    };

    const next = matter.stringify(content, removeUndefined(frontmatter), { lineWidth: 0 });
    await fs.writeFile(path.join(outputDir, `${slug}.md`), next, 'utf8');
  }

  console.log(`Synced ${files.length} legacy posts into src/content/posts/legacy.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
