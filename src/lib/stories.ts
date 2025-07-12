import { StoryCollection, StoryEntry } from "./schema/stories";

export const stories: StoryCollection = {
  "monkey-and-crocodile": {
    title: "Monkey and crocodile",
    id: "monkey-and-crocodile",
    slug: "monkey-and-crocodile",
    characters: ["🐒", "🐊"],
    data: {},
    description:
      " description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-2-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-2-dumb-monkies",
    slug: "clever-cat-and-2-dumb-monkies",
    characters: ["🐒", "🐊"],
    data: {},
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-3-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-3-dumb-monkies",
    slug: "clever-cat-and-3-dumb-monkies",
    characters: ["🐒", "🐊"],
    data: {},
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-4-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-4-dumb-monkies",
    slug: "clever-cat-and-4-dumb-monkies",
    characters: ["🐒", "🐊"],
    data: {},
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-5-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-5-dumb-monkies",
    slug: "clever-cat-and-5-dumb-monkies",
    characters: ["🐒", "🐊"],
    data: {},
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-6-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-6-dumb-monkies",
    slug: "clever-cat-and-6-dumb-monkies",
    characters: ["🐒", "🐊"],
    data: {},
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
};

export function getAllStories() {
  return stories;
}

const stroiesSlugIdMap: Record<string, string> = {};
Object.keys(stories).forEach(
  (slug) => (stroiesSlugIdMap[stories[slug].id] = slug)
);

export function getStoryById(id: string): StoryEntry {
  const slug = stroiesSlugIdMap[id];
  return stories[slug] ?? {};
}

export function getStoryBySlug(slug: string): StoryEntry {
  return stories[slug];
}
