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
      <div>
        {story.characters.map((char, idx) => (
          <span key={`char-${idx}`} className="text-9xl">
            {char}
          </span>
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
