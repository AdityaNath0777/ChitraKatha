import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  PlayIcon,
  SquareMenuIcon,
  StepBackIcon,
  StepForwardIcon,
} from "lucide-react";

export function GoToMainMenuButton({
  children,
  href = "/",
  onBeforeNavigate = () => {},
}: {
  children?: React.ReactNode;
  href?: string;
  onBeforeNavigate?: () => void;
}) {
  return (
    <Button size={"lg"} onClick={onBeforeNavigate} asChild className="w-30">
      <Link href={href}>
        <SquareMenuIcon />
        {children || "Main Menu"}
      </Link>
    </Button>
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
    <Button size={"lg"} onClick={onStart} className="w-30">
      <PlayIcon />
      {children || "Start"}
    </Button>
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
    <Button
      size={"lg"}
      onClick={onPrev}
      className="ring-1 w-30 active:translate-y-1"
    >
      <StepBackIcon />
      {children || "Prev"}
    </Button>
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
    <Button
      size={"lg"}
      onClick={onContinue}
      className="ring-1 w-30 active:translate-y-1"
    >
      {children || "Continue"}
      <StepForwardIcon />
    </Button>
  );
}
