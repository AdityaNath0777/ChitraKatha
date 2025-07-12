import { z } from "zod";

// entries
export const storyEntryPreviewSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
});

export const storyEntrySchema = storyEntryPreviewSchema.extend({
  characters: z.array(z.string()),
  data: z.object().optional(),
}); // will extend soon

// collections
export const storyCollectionSchema = z.record(z.string(), storyEntrySchema);
export const storyCollectionPreviewSchema = z.record(
  z.string(),
  storyEntryPreviewSchema
);

// types
export type StoryEntryPreview = z.infer<typeof storyEntryPreviewSchema>;
export type StoryCollectionPreview = z.infer<
  typeof storyCollectionPreviewSchema
>;
export type StoryEntry = z.infer<typeof storyEntrySchema>;
export type StoryCollection = z.infer<typeof storyCollectionSchema>;
