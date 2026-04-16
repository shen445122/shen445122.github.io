#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { getTemplate, getTemplateNames } from './new-post/templates.mjs';

const repoRoot = process.cwd();
const postsDir = path.join(repoRoot, 'src/content/posts/original');

function slugify(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function escapeYaml(value) {
  return JSON.stringify(value ?? '');
}

function parseArgs(argv) {
  const args = [...argv];
  let type = 'essay';
  let titleParts = [];

  while (args.length > 0) {
    const current = args.shift();

    if (current === '--type' || current === '--template') {
      type = args.shift() ?? type;
      continue;
    }

    if (current === '--list-templates') {
      console.log(`Available templates: ${getTemplateNames().join(', ')}`);
      process.exit(0);
    }

    titleParts = [current, ...args].filter(Boolean);
    break;
  }

  return { type, rawTitle: titleParts.join(' ').trim() };
}

function buildFrontmatter({ rawTitle, slug, year, isoDate, type }) {
  const template = getTemplate(type);
  const lines = [
    '---',
    `title: ${escapeYaml(rawTitle)}`,
    'description: ""',
    `postType: ${type}`,
    `category: ${escapeYaml(template.category)}`,
    'tags: []',
    'keywords: []',
    `year: '${year}'`,
    `date: '${isoDate}T00:00:00.000Z'`,
    `legacyPath: authored/${isoDate}-${slug}.md`,
    `slug: ${slug}`
  ];

  if (template.legacyLayout) {
    lines.push(`legacyLayout: ${template.legacyLayout}`);
  }

  if (template.extraFrontmatter?.length) {
    lines.push(...template.extraFrontmatter);
  }

  lines.push('---', '');
  return `${lines.join('\n')}${template.body({ rawTitle, slug, year, isoDate })}`;
}

async function main() {
  const { type, rawTitle } = parseArgs(process.argv.slice(2));
  const available = getTemplateNames();

  if (!rawTitle) {
    console.error(`Usage: npm run new:post -- --type <${available.join('|')}> "Your Post Title"`);
    process.exit(1);
  }

  if (!available.includes(type)) {
    console.error(`Unknown template "${type}". Available templates: ${available.join(', ')}`);
    process.exit(1);
  }

  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const isoDate = `${year}-${month}-${day}`;
  const slug = slugify(rawTitle);

  await fs.mkdir(postsDir, { recursive: true });

  const filePath = path.join(postsDir, `${isoDate}-${slug}.md`);
  const content = buildFrontmatter({ rawTitle, slug, year, isoDate, type });

  try {
    await fs.access(filePath);
    console.error(`Post already exists: ${path.relative(repoRoot, filePath)}`);
    process.exit(1);
  } catch {
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Created ${path.relative(repoRoot, filePath)} using the ${type} template`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
