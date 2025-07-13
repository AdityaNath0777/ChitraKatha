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

interface ContinueButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
  onContinue: () => void;
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
      className="ring-1 w-30 active:translate-y-1"
      {...rest}
    >
      <StepBackIcon />
      {children || "Prev"}
    </Button>
  );
}

export function ContinueButton({
  children,
  onContinue = () => {},
  ...rest
}: ContinueButtonProps) {
  return (
    <Button
      size={"lg"}
      onClick={onContinue}
      className="ring-1 w-30 active:translate-y-1"
      {...rest}
    >
      {children || "Continue"}
      <StepForwardIcon />
    </Button>
  );
}
