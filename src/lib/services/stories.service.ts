import {
  storyCollectionPreviewSchema,
  type StoryCollectionPreview,
} from "../schema/stories";
import { apiFetch } from "../apiClient";

async function getStoriesPreview(): Promise<StoryCollectionPreview> {
  const data = await apiFetch<unknown>("/api/v1/stories");
  return storyCollectionPreviewSchema.parse(data);
}

export const storiesService = {
  getStoriesPreview,
};
