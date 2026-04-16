import { getCollection } from 'astro:content';
import { siteCopy } from '@/i18n/site';
import type { FeaturedPost, BookEntry, Post, PostEntry, PostType } from '@/types';

const FEATURED_CURATIONS = [
  {
    slug: 'methodology-of-study',
    label: siteCopy.featured.methodLabel,
    note: siteCopy.featured.methodNote
  },
  {
    slug: 'the-minimalism',
    label: siteCopy.featured.restraintLabel,
    note: siteCopy.featured.restraintNote
  },
  {
    slug: 'work-in-company',
    label: siteCopy.featured.workLabel,
    note: siteCopy.featured.workNote
  }
] as const;

function stripMarkdown(text: string | undefined) {
  const source = text ?? '';

  return source
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[>#*_~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function textLength(text: string) {
  return stripMarkdown(text).length;
}

function extractExcerpt(content: string, description?: string) {
  if (description) return description;
  const clean = stripMarkdown(content);
  return clean.slice(0, 168) + (clean.length > 168 ? '…' : '');
}

function readingTime(text: string) {
  const count = textLength(text);
  const minutes = Math.max(1, Math.round(count / 320));
  return siteCopy.post.readingTime(minutes);
}

function inferPostType(entry: PostEntry, books: BookEntry[], body: string): PostType {
  if (entry.data.postType) return entry.data.postType;
  if (entry.data.legacyLayout === 'book' || books.length > 0) return 'reading-list';

  const length = textLength(body);
  return length <= 2400 ? 'note' : 'essay';
}

export function getPostTypeLabel(type: PostType) {
  switch (type) {
    case 'reading-list':
      return siteCopy.labels.readingList;
    case 'note':
      return siteCopy.labels.note;
    default:
      return siteCopy.labels.essay;
  }
}

export function getPostTypeDescription(type: PostType) {
  switch (type) {
    case 'reading-list':
      return siteCopy.post.typeDescription.readingList;
    case 'note':
      return siteCopy.post.typeDescription.note;
    default:
      return siteCopy.post.typeDescription.essay;
  }
}

export function groupPostsByType(posts: Post[]) {
  return {
    essay: posts.filter((post) => post.postType === 'essay'),
    note: posts.filter((post) => post.postType === 'note'),
    'reading-list': posts.filter((post) => post.postType === 'reading-list')
  } satisfies Record<PostType, Post[]>;
}

function normalizeBookCover(cover?: string) {
  if (!cover) return undefined;
  if (cover.startsWith('/public/')) return cover.replace('/public', '');
  return cover;
}

function normalizeBooks(books: PostEntry['data']['books']): BookEntry[] {
  if (!books) return [];

  return books.map((book) => ({
    ...book,
    cover: normalizeBookCover(book.cover)
  }));
}

export function toPost(entry: PostEntry): Post {
  const books = normalizeBooks(entry.data.books);
  const body = entry.body ?? '';
  const postType = inferPostType(entry, books, body);

  return {
    slug: entry.slug,
    title: entry.data.title,
    description: entry.data.description?.trim() ?? '',
    postType,
    category: entry.data.category?.trim() ?? siteCopy.nav.writing,
    tags: entry.data.tags ?? [],
    date: entry.data.date,
    year: entry.data.year,
    legacyLayout: entry.data.legacyLayout,
    readingTime: readingTime(body),
    textLength: textLength(body),
    excerpt: extractExcerpt(body, entry.data.description),
    body,
    legacyPath: entry.data.legacyPath,
    books,
    isBookPost: postType === 'reading-list'
  };
}

export async function getAllPostEntries() {
  const entries = await getCollection('posts');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getAllPosts() {
  const entries = await getAllPostEntries();
  return entries.map(toPost);
}

export async function getLatestPosts(limit = 6) {
  return (await getAllPosts()).slice(0, limit);
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getAllPosts();
  const featured = FEATURED_CURATIONS.map((item) => posts.find((post) => post.slug === item.slug)).filter(Boolean) as Post[];

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  const fallback = posts.filter((post) => !FEATURED_CURATIONS.some((item) => item.slug === post.slug));
  return [...featured, ...fallback].slice(0, limit);
}

export async function getHomepageFeatured(limit = 3): Promise<FeaturedPost[]> {
  const posts = await getAllPosts();
  const curated = FEATURED_CURATIONS.map((item) => {
    const post = posts.find((entry) => entry.slug === item.slug);
    return post ? { ...item, post } : null;
  }).filter(Boolean) as FeaturedPost[];

  return curated.slice(0, limit);
}

export async function getPostEntryBySlug(slug: string) {
  const entries = await getAllPostEntries();
  return entries.find((entry) => entry.slug === slug);
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat(siteCopy.meta.lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
