import { z } from "zod";

export const choiceSchema = z.object({
  text: z.string(),
  nextSceneId: z.string(),
});

export const sceneSchema = z.object({
  type: z.enum(["narration", "choice", "end"]).optional(),
  background: z.string().optional(),
  character: z.string().optional(),
  textChunks: z.array(z.string()),
  choices: z.array(choiceSchema),
});

export const storyData = z.record(z.string(), sceneSchema);

// entries
export const storyEntryPreviewSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
});

export const storyEntrySchema = storyEntryPreviewSchema.extend({
  characters: z.array(z.string()),
  startSceneId: z.string(),
  data: storyData,
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
