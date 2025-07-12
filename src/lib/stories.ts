import { StoryCollection } from "@/types/stories";

export const stories: StoryCollection = {
  "monkey-and-crocodile": {
    title: "Monkey and crocodile",
    id: "monkey-and-crocodile",
    slug: "monkey-and-crocodile",
    description:
      " description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-2-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-2-dumb-monkies",
    slug: "clever-cat-and-2-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-3-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-3-dumb-monkies",
    slug: "clever-cat-and-3-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-4-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-4-dumb-monkies",
    slug: "clever-cat-and-4-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-5-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-5-dumb-monkies",
    slug: "clever-cat-and-5-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
  "clever-cat-and-6-dumb-monkies": {
    title: "Clever Cat and 2 dumb monkies",
    id: "clever-cat-and-6-dumb-monkies",
    slug: "clever-cat-and-6-dumb-monkies",
    description:
      "description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus maxime, neque placeat iste totam minus eum blanditiis nemo, tenetur earum.",
  },
};

export function getAllStories() {
  return stories;
}

export function getStoryById(id: string) {
  return stories[id];
}
