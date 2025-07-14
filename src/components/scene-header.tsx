import React from "react";

interface SceneHeaderProps {
  children: React.ReactNode;
  faded: boolean;
}

function SceneHeader({ children, faded }: SceneHeaderProps) {
  return (
    <div className="flex flex-col h-full w-full items-baseline justify-center">
      <div
        className={`text-6xl lg:text-8xl w-full text-center ${
          faded ? "opacity-40" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default SceneHeader;
