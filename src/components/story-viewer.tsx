"use client";

import React, { useState } from "react";
import { GoToMainMenuButton, StartStoryButton } from "./story-buttons";
import { StoryEntry } from "@/lib/schema/stories";
import DialogueBox from "./dialogue-box";

function StoryViewer({ story }: { story: StoryEntry }) {
  const [sceneId, setSceneId] = useState<string>("");
  const [dialogueDone, setDialogueDone] = useState<boolean>(false);

  const currentScene = story.data[sceneId];

  const handleStartGame = () => {
    setSceneId("start");
  };

  const handleChoice = (nextSceneId: string) => {
    if (nextSceneId) {
      setSceneId(nextSceneId);
    }
    setDialogueDone(false);
  };

  const handleAutoContinue = () => {
    const onlyChoice = currentScene.choices[0];
    if (onlyChoice) {
      handleChoice(onlyChoice.nextSceneId);
    }
  };

  const handleDialogueEnd = () => {
    if (
      currentScene.choices.length === 0 ||
      currentScene.choices[0].text.toLowerCase() === "continue"
    ) {
      handleAutoContinue();
    } else setDialogueDone(true);
  };

  return (
    <div className="story-viewer-container w-full flex flex-col gap-4 max-w-4xl">
      <GoToMainMenuButton />

      {!sceneId && !currentScene && (
        <>
          <div>
            {story.characters.map((char, idx) => (
              <span key={`story-char-${idx}`} className="text-9xl">
                {char}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            {story.description.split("\n").map((desc, idx) => (
              <p key={`${story.id}-description-para-${idx}`}>{desc}</p>
            ))}
          </div>

          <div className="flex items-center justify-center w-full">
            <StartStoryButton onStart={handleStartGame} />
          </div>
        </>
      )}

      <div className="relative h-48  w-full p-2">
        <div className="flex flex-col h-full w-full items-baseline justify-center">
          <p
            className={`text-6xl lg:text-8xl w-full text-center ${
              dialogueDone ? "opacity-40" : ""
            }`}
          >
            {currentScene?.character || ""}
          </p>
        </div>

        {dialogueDone && currentScene.choices.length > 0 && (
          <>
            <div className="absolute inset-0">
              <ul className="flex flex-col h-full items-center justify-center gap-2 sm:gap-3 shadow-md max-w-md mx-auto ring-1 ring-gray-500/30 bg-blue-300/5 glass-card">
                {currentScene.choices.map((choice, idx) => (
                  <li
                    key={`choice-${idx}`}
                    onClick={() => handleChoice(choice.nextSceneId)}
                    className="text-sm lg:text-base ring-1 cursor-pointer hover:bg-gray-400/20 ring-slate-500/40 w-4/5 lg:w/2/3 px-2 py-1 rounded"
                  >
                    {choice.text}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {sceneId && currentScene && (
        <>
          <DialogueBox
            chunks={currentScene.textChunks}
            onEnd={handleDialogueEnd}
          />
        </>
      )}
    </div>
  );
}

export default StoryViewer;
