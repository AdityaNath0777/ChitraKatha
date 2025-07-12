export interface StoryEntry {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface StoryCollection {
  [key: string]: StoryEntry;
}

export interface StoryEntryPreview {
  id: string;
  title: string;
  description: string;
  slug: string;
}

export interface StoryCollectionPreview {
  [key: string]: StoryEntryPreview;
}
