import type { CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export type HeadingLink = {
  depth: number;
  slug: string;
  text: string;
};

export type PostType = 'essay' | 'note' | 'reading-list';

export type BookEntry = {
  title: string;
  status?: string;
  author?: string;
  publisher?: string;
  language?: string;
  link?: string;
  cover?: string;
  description?: string;
  review?: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  postType: PostType;
  category: string;
  tags: string[];
  date: Date;
  year: string;
  legacyLayout?: string;
  readingTime: string;
  textLength: number;
  excerpt: string;
  body: string;
  legacyPath: string;
  books: BookEntry[];
  isBookPost: boolean;
};

export type FeaturedPost = {
  post: Post;
  label: string;
  note: string;
};
