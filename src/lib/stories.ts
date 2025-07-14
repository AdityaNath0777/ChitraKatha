import { StoryEntry } from "./schema/stories";

const monkeyAndCrocodileStory: StoryEntry = {
  title: "The Monkey and the Crocodile",
  id: "monkey-and-crocodile",
  slug: "monkey-and-crocodile",
  characters: ["🐒", "🐊", "🐊♀️"],
  description:
    "A clever monkey and a crocodile share friendship and fruit under the great Jamun tree. \n But when love, suspicion, and hunger stir darker motives, who shall survive—the kind, the cunning, or the cruel?",
  startSceneId: "proverb_intro",
  data: {
    proverb_intro: {
      background: "bg-yellow-400/40", // for sun
      character: null,
      textChunks: [
        '"A guest, when honored, becomes a bridge to the heavens. But if dishonored, even the gods turn away."',
        '"Friendship forged through virtue is greater than that of blood." — Panchatantra',
      ],
      choices: [{ text: "Begin the Tale", nextSceneId: "start" }],
    },

    start: {
      background: "bg-green-500/40", // for trees
      character: "🐒",
      textChunks: [
        "On the shore of the sea stood a great Jamun tree, always full of fruit.",
        "A monkey named Red-Face lived in its branches, content and clever.",
      ],
      choices: [{ text: "Continue", nextSceneId: "scene1" }],
    },

    scene1: {
      background: "bg-blue-800", // for sea
      character: "🐊",
      textChunks: [
        "One day, a crocodile named Ugly-Mug emerged from the ocean and rested beneath the tree.",
        'Red-Face saw him and called out: "You are my guest, sir. Please enjoy these Jamun fruits. You will find them like nectar!"',
        '"Do not ask of caste or kin; when a guest arrives, honor must begin."',
      ],
      choices: [{ text: "Continue", nextSceneId: "scene2" }],
    },

    scene2: {
      background: "bg-green-500/40",
      character: "🐒",
      textChunks: [
        "Ugly-Mug ate the fruits and returned daily.",
        "They spoke of life, morals and dreams. Their bond deepened and became freinds soon.",
        "Their bond deepned. In time, they called each other 'brother'.",
      ],
      choices: [{ text: "Continue", nextSceneId: "scene3" }],
    },

    scene3: {
      background: "bg-red-900", // interior of croco's home (predator style)
      character: "🐊♀️",
      textChunks: [
        "Ugly-Mug brought Jamuns home. His wife tasted them and exclaimed:",
        '"Where did you get such divine fruit? Surely the one who eats this daily has a heart soaked in nectar!"',
        '"Bring me his heart, husband. I must taste it! Then I shall never grow old or sick and be forever with you, my love!"',
      ],
      choices: [{ text: "Continue", nextSceneId: "scene4" }],
    },

    scene4: {
      background: "bg-red-900",
      character: "🐊",
      textChunks: [
        'Ugly-Mug resisted: "He is my friend! My brother! We cannot betray him."',
        '"Liar!" His wife shouted. "You love someone else! You spend days with that monkey because it\'s a she-monkey, right?"',
        '"Everyday you come home full of sighs!"',
        '"If that monkey is a he-monkey, then there should be no reason for you to hesistate in killing him for me!"',
        '"Unless I eat his heart, I shall die here and now!"',
      ],
      choices: [
        {
          text: "Invite Red-Face",
          nextSceneId: "scene5_invite",
        },
        {
          text: "Let your wife die",
          nextSceneId: "end_death_from_hunger",
        },
      ],
    },

    scene5_invite: {
      background: "bg-blue-700", // sea + helplessness
      character: "🐊",
      textChunks: [
        'Ugly-Mug said: "My brother, my wife has prepared a feast. She waits to honor you."',
        'Red-Face smiled but paused. "But how shall I go? You live in the sea."',
      ],
      choices: [
        { text: "Trust him and go joyfully", nextSceneId: "scene6_trust" },
        { text: "Go with mild suspicion", nextSceneId: "scene6_suspicious" },
        { text: "Refuse politely", nextSceneId: "scene6_refuse" },
      ],
    },

    scene6_trust: {
      background: "bg-blue-700",
      character: "🐒",
      textChunks: [
        'Red-Face trusted him completely and said: "Then hasten! I ride with joy!"',
        "He leapt on his friend's back.",
      ],
      choices: [{ text: "Continue", nextSceneId: "scene7_betrayal" }],
    },

    scene6_suspicious: {
      background: "bg-blue-800",
      character: "🐒",
      textChunks: [
        "'Strange… but he is my friend.' Red-Face thought.",
        "He climbed on, heart uneasy but hopeful.",
      ],
      choices: [{ text: "Continue", nextSceneId: "scene7_betrayal" }],
    },

    scene6_refuse: {
      background: "bg-green-800",
      character: "🐒",
      textChunks: [
        "'Brother, your lady is kind. But monkeys dwell in trees. Perhaps she may come here?'",
        "Ugly-Mug's eye twitched.",
      ],
      choices: [
        { text: "Ugly-Mug insists again", nextSceneId: "scene6b_persuade" },
        { text: "Ugly-Mug backs off", nextSceneId: "end_peaceful_departure" },
      ],
    },

    scene6b_persuade: {
      background: "bg-red-600",
      character: "🐊",
      textChunks: [
        '"Please, don\'t embarrass me! My wife will be insulted if you refuse."',
        "Red-Face hesitates as a wave crashes…",
      ],
      choices: [
        { text: "Reluctantly accept", nextSceneId: "scene7_betrayal" },
        { text: "Leap away in fear", nextSceneId: "end_escape_jump" },
      ],
    },

    scene7_betrayal: {
      background: "bg-blue-900",
      character: "🐊",
      textChunks: [
        'As they swam far into the sea, "My wife", Ugly-Mug said midway, "demands your heart. I have deceived you, my friend."',
        "Red-Face trembled, but did not show it.",
      ],
      choices: [
        { text: "Think of a clever lie", nextSceneId: "scene8_lie" },
        { text: "Beg for life", nextSceneId: "scene8_beg" },
        { text: "Panic helplessly", nextSceneId: "end_panic_death" },
      ],
    },

    scene8_lie: {
      background: "bg-green-700",
      character: "🐒",
      textChunks: [
        '"Why didn\'t you say earlier? I left my other heart in the tree, as I do every day for safety!"',
        '"Take me back and I shall bring it for your wife."',
      ],
      choices: [{ text: "Continue", nextSceneId: "scene9_escape" }],
    },

    scene8_beg: {
      background: "bg-gray-800", // shocked
      character: "🐒",
      textChunks: [
        '"Brother! What harm have I done? Have you forgotten our friendship? Spare me, please!"',
        "Ugly-Mug turned his gaze away, torn between guilt and duty.",
      ],
      choices: [
        { text: "Spare Red-Face", nextSceneId: "end_spared" },
        { text: "Proceed to kill", nextSceneId: "end_killed" },
      ],
    },

    scene9_escape: {
      background: "bg-green-800",
      character: "🐒",
      textChunks: [
        "Delighted, Ugly-Mug returned to the tree.",
        "Red-Face leapt to the highest branch, shouting:",
        '"You fool! Do you think one has two hearts?"',
        '"To trust a traitor once is foolish; to trust him twice is death. Now go away and never come back here!"',
        '"Today is my REBIRTH!"',
      ],
      choices: [{ text: "Continue", nextSceneId: "end_victory" }],
    },

    end_victory: {
      background: "bg-green-500",
      character: "🐒",
      textChunks: [
        "Ugly-Mug left in shame. Red-Face learned to trust wisely.",
        "Moral: Cleverness and composure defeat brute betrayal.",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },

    end_peaceful_departure: {
      background: "bg-gray-600",
      character: "🐊",
      textChunks: [
        "Ugly-Mug turned and left. Red-Face continued life with cautious peace.",
        "Moral: Refusing politely is wisdom; distance guards friendship.",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },

    end_escape_jump: {
      background: "bg-red-900",
      character: "🐒",
      textChunks: [
        "Sensing danger, Red-Face leapt to a distant branch.",
        "Ugly-Mug roared in frustration.",
        "Moral: Timely suspicion is greater than blind trust.",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },

    end_spared: {
      background: "bg-blue-800",
      character: "🐊",
      textChunks: [
        'Ugly-Mug wept: "I cannot betray you." He returned Red-Face safely.',
        "He faced his wife's wrath and spent the week trying to appease her with more Jamun fruits, but kept his soul intact..",
        "Moral: When virtue prevails, even fear yields to honor.",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },

    end_killed: {
      background: "bg-black",
      character: "💀",
      textChunks: [
        "Ugly-Mug obeyed his wife. Red-Face was no more.",
        "The Jamun tree bore fruit—but no laughter.",
        "Moral: Fear and folly can destroy what wisdom builds.",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },

    end_panic_death: {
      background: "bg-red-950",
      character: "💀",
      textChunks: [
        "Red-Face panicked, unable to think. Ugly-Mug fulfilled the cruel wish.",
        "Moral: Composure is life. Panic is death.",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },

    end_death_from_hunger: {
      background: "bg-red-950",
      character: "🐊♀️💀",
      textChunks: [
        "Ugly-Mug chose his friendship over his greedy-wife.",
        "In the process, he betrayed the one he vowed to stand beside till death do them apart.",
        "Unable to bear the guilt, Ugly-Mug remained hungry until he too passed away",
        "Moral: Greed or helplessness can bring ruin not only to oneself, but to those we love",
      ],
      choices: [{ text: "Replay the Fable", nextSceneId: "start" }],
    },
  },
};

const storyList = [monkeyAndCrocodileStory];

// export const stories: StoryCollection = {
//   [monkeyAndCrocodileStory.id]: monkeyAndCrocodileStory,
// };

export const stories = new Map<string, StoryEntry>();

storyList.forEach((story) => {
  stories.set(story.id, story);
});

function getAllStoriesAsObject(): Record<string, StoryEntry> {
  const result: Record<string, StoryEntry> = {};
  stories.forEach((story, id) => {
    result[id] = story;
  });

  return result;
}

export function getAllStories() {
  return getAllStoriesAsObject();
}

const storiesSlugToIdMap = new Map<string, string>();
storyList.forEach((story) => {
  storiesSlugToIdMap.set(story.slug, story.id);
});

export function getStoryById(id: string): StoryEntry | undefined {
  return stories.get(id);
}

export function getStoryBySlug(slug: string): StoryEntry | undefined {
  const id = storiesSlugToIdMap.get(slug);

  return id ? stories.get(id) : undefined;
}
