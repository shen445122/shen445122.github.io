import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    postType: z.enum(['essay', 'note', 'reading-list']).optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    version: z.string().optional(),
    legacyLayout: z.string().optional(),
    legacyPath: z.string(),
    year: z.string(),
    date: z.coerce.date(),
    books: z
      .array(
        z.object({
          title: z.string(),
          status: z.string().optional(),
          author: z.string().optional(),
          publisher: z.string().optional(),
          language: z.string().optional(),
          link: z.string().optional(),
          cover: z.string().optional(),
          description: z.string().optional(),
          review: z.string().optional()
        })
      )
      .optional()
  })
});

export const collections = { posts };
