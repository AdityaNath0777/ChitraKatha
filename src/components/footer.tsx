import { cn } from "@/lib/utils";
import React from "react";

function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={cn("gap-[24px] text-sm text-center px-4 pb-4", className)}>
      Made with childhood Nostalagia 😊 by{" "}
      <code className="font-bold">
        <em>Aditya Mishra</em>{" "}
      </code>{" "}
      while listening to banger songs 🎵
    </footer>
  );
}

export default Footer;
