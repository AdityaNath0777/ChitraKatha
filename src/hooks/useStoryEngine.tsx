"use client";

import { StoryEntry } from "@/lib/schema/stories";
import { useState } from "react";

export function useStoryEngine(story: StoryEntry) {
  const [sceneId, setSceneId] = useState<string>("");
  const [dialogueEnd, setDialogueEnd] = useState<boolean>(false);

  const currentScene = story.data[sceneId];

  const start = () => setSceneId(story.startSceneId);

  const pickChoice = (id: string) => {
    setSceneId(id);
    setDialogueEnd(false);
  };

  const autoContinue = () => {
    const onlyChoice = currentScene?.choices?.[0];
    if (onlyChoice) pickChoice(onlyChoice.nextSceneId);
  };

  const onDialogueEnd = () => {
    if (
      currentScene.choices.length === 0 ||
      currentScene.choices[0].text.toLowerCase() === "continue"
    ) {
      autoContinue();
    } else setDialogueEnd(true);
  };

  return {
    sceneId,
    dialogueEnd,
    currentScene,
    start,
    pickChoice,
    onDialogueEnd,
  };
}
