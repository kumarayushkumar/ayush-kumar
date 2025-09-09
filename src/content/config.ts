import { defineCollection, z } from 'astro:content'

const blogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    readTime: z.number(),
    slug: z.string().optional()
  })
})

export const collections = { blogs: blogsCollection }
