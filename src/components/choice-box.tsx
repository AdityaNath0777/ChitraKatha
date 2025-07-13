import { Choice } from "@/lib/schema/stories";
import React from "react";

interface ChoiceBoxProps {
  choices: Choice[];
  onChoice: (nextSceneId: string) => void;
}

function ChoiceBox({ choices, onChoice }: ChoiceBoxProps) {
  return (
    <ul className="flex flex-col h-full items-center justify-center gap-2 sm:gap-3 shadow-md max-w-md mx-auto ring-1 ring-gray-500/30 bg-blue-300/5 glass-card">
      {choices.map((choice, idx) => (
        <li
          key={`choice-${idx}`}
          onClick={() => onChoice(choice.nextSceneId)}
          className="text-sm lg:text-base ring-1 cursor-pointer hover:bg-gray-400/20 ring-slate-500/40 w-4/5 lg:w/2/3 px-2 py-1 rounded"
        >
          {choice.text}
        </li>
      ))}
    </ul>
  );
}

export default ChoiceBox;
