"use client";

import React, { useEffect, useState } from "react";
import { ContinueButton, PrevButton } from "./story-buttons";

interface DialogueBoxProps {
  chunks: string[];
  onEnd: () => void;
}

function DialogueBox({ chunks, onEnd }: DialogueBoxProps) {
  const [chunkIndex, setChunkIndex] = useState<number>(0);

  useEffect(() => {
    setChunkIndex(0);
  }, [chunks]);

  const handlePrev = () => {
    if (chunkIndex > 0) setChunkIndex(chunkIndex - 1);
  };

  const handleContinue = () => {
    if (chunkIndex < chunks.length - 1) setChunkIndex(chunkIndex + 1);
    else onEnd();
  };

  return (
    <div className="flex flex-col gap-3 items-end ring-2 rounded-md p-4">
      <div className="flex flex-wrap w-full text-sm lg:text-base h-24 lg:h-20">
        {chunks[chunkIndex]}
      </div>
      <div className="flex w-full justify-between">
        <PrevButton onPrev={handlePrev} disabled={chunkIndex <= 0} />
        <ContinueButton onContinue={handleContinue} />
      </div>
    </div>
  );
}

export default DialogueBox;
