import { StoryCollection, StoryEntry } from "./schema/stories";

export const stories: StoryCollection = {
  "monkey-and-crocodile": {
    title: "Monkey and crocodile",
    id: "monkey-and-crocodile",
    slug: "monkey-and-crocodile",
    characters: ["🐒", "🐊"],
    description:
      "A kind & clever monkey shared yummy jamuns with a hungry crocodile, and they became friends. But when the crocodile told his wife about the monkey, she had a strange idea: she wanted to eat the monkey who ate such delicious fruit! \n Will the crocodile trick his new friend? \n Can the clever monkey escape from this big danger?",
    startSceneId: "start",
    data: {
      start: {
        background: "bg-green-700",
        character: "🐒",
        textChunks: [
          "A smart monkey lived by a river on a Jamun tree.",
          "He loved eating its sweet fruits.",
        ],
        choices: [{ text: "Begin the Tale", nextSceneId: "scene1" }],
      },
      scene1: {
        background: "bg-blue-600",
        character: "🌄",
        textChunks: [
          "One hot day, a crocodile came to the river.",
          "The kind monkey gave him some sweet Jamun fruits.",
        ],
        choices: [{ text: "Continue", nextSceneId: "scene2" }],
      },
      scene2: {
        background: "bg-blue-600",
        character: "🐒",
        textChunks: [
          "They quickly became good friends.",
          "The crocodile visited daily, and the monkey always shared his fruits.",
        ],
        choices: [{ text: "Continue", nextSceneId: "scene3" }],
      },
      scene3: {
        background: "bg-red-700",
        character: "🐊",
        textChunks: [
          "One day, the crocodile took fruits home for his wife.",
          "After eating them, she wanted the monkey's heart, thinking it would be even sweeter.",
        ],
        choices: [{ text: "Continue", nextSceneId: "scene4" }],
      },
      scene4: {
        background: "bg-red-700",
        character: "🐊",
        textChunks: [
          "The crocodile felt bad but agreed to his wife's wish.",
          "He invited the monkey to dinner at his home across the river.",
        ],
        choices: [
          { text: "Trust his friend and go", nextSceneId: "choice1_trust" },
          {
            text: "Feel a little suspicious",
            nextSceneId: "choice1_suspicious",
          },
        ],
      },
      choice1_trust: {
        background: "bg-blue-800",
        character: "🐒",
        textChunks: [
          "The monkey trusted his friend and happily jumped onto the crocodile's back to cross the river.",
        ],
        choices: [{ text: "Continue", nextSceneId: "scene5" }],
      },
      choice1_suspicious: {
        background: "bg-blue-800",
        character: "🐒",
        textChunks: [
          "The monkey felt a little uneasy but decided to go.",
          "He carefully got onto the crocodile's back.",
        ],
        choices: [{ text: "Continue", nextSceneId: "scene5" }],
      },
      scene5: {
        background: "bg-blue-900",
        character: "🐊",
        textChunks: [
          "Halfway across the river, the crocodile stopped and sadly told him:",
          "'My wife wants to eat your heart. That's why I brought you here.'",
        ],
        choices: [
          {
            text: "Think fast and stay calm",
            nextSceneId: "choice2_quick_thinking",
          },
          { text: "Beg for your life", nextSceneId: "end_bad_killed" },
          { text: "Panic and freeze", nextSceneId: "end_bad_eaten" },
          { text: "Try to make a deal with him", nextSceneId: "end_team_up" },
        ],
      },
      choice2_quick_thinking: {
        background: "bg-green-700",
        character: "🐒",
        textChunks: [
          "The clever monkey, acting calm, said:",
          "'Oh no! I left my heart on the Jamun tree. If you had told me, I would have brought it!'",
        ],
        choices: [{ text: "Continue", nextSceneId: "scene6" }],
      },
      scene6: {
        background: "bg-blue-900",
        character: "🐊",
        textChunks: [
          "The foolish crocodile believed the monkey and turned back to the tree.",
          "As soon as they reached the bank, the monkey quickly jumped off and climbed to safety.",
        ],
        choices: [{ text: "Continue", nextSceneId: "end_good" }],
      },
      end_good: {
        background: "bg-green-500",
        character: "🐒",
        textChunks: [
          "Safe on his tree, the monkey shouted:",
          "'A heart can't be removed, you fool! Your wife's greed made you lose a friend!'",
          "The crocodile felt very ashamed and swam away.",
        ],
        choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
      },
      end_bad_killed: {
        background: "bg-gray-900",
        character: "🐊",
        textChunks: [
          "The monkey begged, but the crocodile, torn between his wife and friend, made a hard choice.",
          "'I'm truly sorry, my friend,' the crocodile whispered, as the river took them...",
        ],
        choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
      },
      end_bad_eaten: {
        background: "bg-red-900",
        character: "💀",
        textChunks: [
          "The monkey panicked and couldn't think.",
          "The crocodile did what his wife wanted. The sweet Jamun fruits were no more...",
        ],
        choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
      },
      end_team_up: {
        background: "bg-purple-800",
        character: "🐒🐊",
        textChunks: [
          "The monkey saw their shared problem.",
          "He said: 'Your wife's greed will hurt us both! Let's teach her a lesson and show her what true friendship means.'",
          "The crocodile thought this was a good idea and agreed.",
        ],
        choices: [{ text: "Continue", nextSceneId: "end_team_up_resolution" }],
      },
      end_team_up_resolution: {
        background: "bg-purple-700",
        character: "🤝",
        textChunks: [
          "Together, the monkey and crocodile faced Mrs. Crocodile.",
          "They calmly explained how her greed was wrong and how important loyalty was.",
          "She slowly understood and promised to change.",
          "Their friendship grew stronger, based on honesty and respect.",
        ],
        choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
      },
    },
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
