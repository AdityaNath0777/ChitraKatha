"use client";

import React, { useEffect, useState } from "react";
import { NextButton, PrevButton } from "./story-buttons";

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

  const handleNext = () => {
    if (chunkIndex < chunks.length - 1) setChunkIndex(chunkIndex + 1);
    else {
      setChunkIndex(chunkIndex + 1);
      onEnd();
    }
  };

  return (
    <div className="flex flex-col gap-3 items-end ring-2 rounded-md p-4">
      <div className="flex flex-wrap w-full text-sm sm:text-base lg:text-lg h-24 lg:h-20">
        {chunks[chunkIndex]}
      </div>
      <div className="flex w-full justify-between">
        <PrevButton onPrev={handlePrev} disabled={chunkIndex <= 0} />
        <NextButton
          onNext={handleNext}
          disabled={chunkIndex >= chunks.length}
        />
      </div>
    </div>
  );
}

export default DialogueBox;
