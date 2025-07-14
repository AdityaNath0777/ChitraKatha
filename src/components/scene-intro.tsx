"use client";

import { StoryEntry } from "@/lib/schema/stories";
import React from "react";
import { StartStoryButton } from "./story-buttons";

interface SceneIntroProps {
  story: StoryEntry;
  onStart: () => void;
}

function SceneIntro({ story, onStart }: SceneIntroProps) {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {story.characters.map((char, idx) => (
          <>
            <div
              key={`character-${idx}-${char}`}
              className="text-6xl border-b border-gray-500/40 rounded p-2 lg:text-9xl"
            >
              {char}
            </div>
          </>
        ))}
      </div>
      <div className="space-y-2">
        {story.description.split("\n").map((desc, idx) => (
          <p key={`desc-${idx}`}>{desc}</p>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <StartStoryButton onStart={onStart} />
      </div>
    </>
  );
}

export default SceneIntro;
