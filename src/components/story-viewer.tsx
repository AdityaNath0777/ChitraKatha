"use client";

import React from "react";
import {
  ContinueButton,
  GoToMainMenuButton,
  PrevButton,
  StartStoryButton,
} from "./story-buttons";
import { StoryEntry } from "@/lib/schema/stories";

function StoryViewer({ story }: { story: StoryEntry }) {
  return (
    <div className="story-viewer-container w-full flex flex-col gap-4 max-w-4xl">
      <GoToMainMenuButton />

      <div>
        {story.characters.map((char, idx) => (
          <span key={`story-char-${idx}`} className="text-9xl">
            {char}
          </span>
        ))}
      </div>
      <p>{story.description}</p>

      <div className="flex items-center justify-center w-full">
        <StartStoryButton onStart={() => {}} />
      </div>

      <div className="w-full flex justify-between gap-4">
        <PrevButton onPrev={() => {}} />
        <ContinueButton onContinue={() => {}} />
      </div>
    </div>
  );
}

export default StoryViewer;
