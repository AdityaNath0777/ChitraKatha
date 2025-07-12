import Link from "next/link";
import React from "react";

export function GoToMainMenuButton({
  children,
  href = "",
  onBeforeNavigate,
}: {
  children?: React.ReactNode;
  href?: string;
  onBeforeNavigate: () => void;
}) {
  return (
    <button
      type="button"
      className=" px-4 py-4 ring-2 rounded w-30 hover:bg-white/5 active:translate-y-1"
      onClick={onBeforeNavigate}
    >
      <Link href={href} className="w-full">
        {children || "Main Menu"}
      </Link>
    </button>
  );
}

export function StartStoryButton({
  children,
  onStart,
}: {
  children?: React.ReactNode;
  onStart: () => void;
}) {
  return (
    <button
      type="button"
      className=" px-4 py-4 ring-2 rounded w-30 hover:bg-white/5 active:translate-y-1"
      onClick={onStart}
    >
      {children || "Start Story"}
    </button>
  );
}

export function PrevButton({
  children,
  onPrev = () => {},
}: {
  children?: React.ReactNode;
  onPrev: () => void;
}) {
  return (
    <button
      type="button"
      className=" px-4 py-4 ring-2 rounded w-30 hover:bg-white/5 active:translate-y-1"
      onClick={onPrev}
    >
      {children || "Prev"}
    </button>
  );
}

export function ContinueButton({
  children,
  onContinue = () => {},
}: {
  children?: React.ReactNode;
  onContinue: () => void;
}) {
  return (
    <button
      type="button"
      className=" px-4 py-4 ring-2 rounded w-30 hover:bg-white/5 active:translate-y-1"
      onClick={onContinue}
    >
      {children || "Continue"}
    </button>
  );
}
