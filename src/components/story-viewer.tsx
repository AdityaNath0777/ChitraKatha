"use client";

import React from "react";
import { GoToMainMenuButton, RestartButton } from "./story-buttons";
import { StoryEntry } from "@/lib/schema/stories";
import DialogueBox from "./dialogue-box";
import ChoiceBox from "./choice-box";
import { useStoryEngine } from "@/hooks/useStoryEngine";
import SceneIntro from "./scene-intro";
import SceneHeader from "./scene-header";

function StoryViewer({ story }: { story: StoryEntry }) {
  const {
    sceneId,
    dialogueEnd,
    currentScene,
    start,
    pickChoice,
    onDialogueEnd,
  } = useStoryEngine(story);

  return (
    <div className="story-viewer-container w-full h-full flex flex-col gap-4 max-w-6xl mx-auto">
      <div className="flex gap-2">
        <GoToMainMenuButton />
        {sceneId && <RestartButton onRestart={start} />}
      </div>

      {!sceneId && <SceneIntro story={story} onStart={start} />}

      {sceneId.length > 0 && (
        <div className={`relative h-48 lg:h-72 w-full p-2 ${currentScene.background}  rounded-md`}>
          <SceneHeader faded={dialogueEnd}>
            {currentScene?.character || ""}
          </SceneHeader>

          {dialogueEnd && currentScene.choices.length > 0 && (
            <div className="absolute inset-0">
              <ChoiceBox choices={currentScene.choices} onChoice={pickChoice} />
            </div>
          )}
        </div>
      )}

      {currentScene && (
        <DialogueBox chunks={currentScene.textChunks} onEnd={onDialogueEnd} />
      )}
    </div>
  );
}

export default StoryViewer;
