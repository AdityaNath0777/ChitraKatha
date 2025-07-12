"use client";

import React from "react";
import { ContinueButton, PrevButton } from "./story-buttons";
import { StoryEntry } from "@/lib/schema/stories";

function StoryViewer({ story }: { story: StoryEntry }) {
  return (
    <div className="story-viewer-container flex flex-col">
      <p>{story.description}</p>
      <div className="w-full flex justify-between gap-4 px-4 py-3">
        <PrevButton onPrev={() => {}} />
        <ContinueButton onContinue={() => {}} />
      </div>
    </div>
  );
}

export default StoryViewer;
