import {
  storyCollectionPreviewSchema,
  storyEntrySchema,
  type StoryCollectionPreview,
} from "../schema/stories";
import { apiFetch } from "../apiClient";

async function getStoriesPreview(): Promise<StoryCollectionPreview> {
  const data = await apiFetch<unknown>("/api/v1/stories");
  return storyCollectionPreviewSchema.parse(data);
}

async function getStoryBySlug(slug: string) {
  const data = await apiFetch<unknown>(`api/v1/stories/${slug}`);
  return storyEntrySchema.parse(data);
}

export const storiesService = {
  getStoriesPreview,
  getStoryBySlug,
};
