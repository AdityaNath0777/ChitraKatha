import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  PlayIcon,
  RotateCcwIcon,
  SquareMenuIcon,
  StepBackIcon,
  StepForwardIcon,
} from "lucide-react";

export function GoToMainMenuButton({
  children,
  href = "/",
  onBeforeNavigate = () => {},
  ...rest
}: {
  children?: React.ReactNode;
  href?: string;
  onBeforeNavigate?: () => void;
}) {
  return (
    <Button
      size={"lg"}
      onClick={onBeforeNavigate}
      {...rest}
      asChild
      className="w-30"
    >
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
  ...rest
}: {
  children?: React.ReactNode;
  onStart: () => void;
}) {
  return (
    <Button size={"lg"} onClick={onStart} {...rest} className="w-30">
      <PlayIcon />
      {children || "Start"}
    </Button>
  );
}

interface PrevButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
  onPrev: () => void;
}

interface NextButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
  onNext: () => void;
}

interface RestartButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
  onRestart: () => void;
}

export function PrevButton({
  children,
  onPrev = () => {},
  ...rest
}: PrevButtonProps) {
  return (
    <Button
      size={"lg"}
      onClick={onPrev}
      className="ring-1 active:translate-y-1"
      {...rest}
    >
      <StepBackIcon />
      {children || "Prev"}
    </Button>
  );
}

export function NextButton({
  children,
  onNext = () => {},
  ...rest
}: NextButtonProps) {
  return (
    <Button
      size={"lg"}
      onClick={onNext}
      className="ring-1 active:translate-y-1"
      {...rest}
    >
      {children || "Next"}
      <StepForwardIcon />
    </Button>
  );
}

export function RestartButton({
  children,
  onRestart,
  ...rest
}: RestartButtonProps) {
  return (
    <Button
      onClick={onRestart}
      className="w-30 active:translate-y-1 duration-200"
      {...rest}
    >
      <RotateCcwIcon /> {children || "Restart"}
    </Button>
  );
}
