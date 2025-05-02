import { defineCollection, z } from 'astro:content';

// If you already have other collections, add this to them
const legalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// Export all collections
export const collections = {
  // Include your existing collections here
  legal: legalCollection,
};