import { BASE_URL } from "@/config/api";
import { StoryCollectionPreview } from "@/types/stories";

async function getStoriesPreview(): Promise<StoryCollectionPreview> {
  const url = `${BASE_URL}/api/v1/stories`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`API Error: ${response.status}`);

  const data = await response.json();
  return data;
}

export const storiesService = {
  getStoriesPreview,
};
