"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraHeroProps {
  children: React.ReactNode;
  className?: string;
}

const AuroraAnimation = () => (
  <style>{`
    @keyframes aurora-1 {
      0%   { transform: translate(0%, 0%) scale(1); }
      25%  { transform: translate(20%, -20%) scale(1.2); }
      50%  { transform: translate(-20%, 20%) scale(0.8); }
      75%  { transform: translate(10%, -10%) scale(1.1); }
      100% { transform: translate(0%, 0%) scale(1); }
    }
    @keyframes aurora-2 {
      0%   { transform: translate(0%, 0%) scale(1); }
      25%  { transform: translate(-20%, 20%) scale(1.1); }
      50%  { transform: translate(20%, -20%) scale(0.9); }
      75%  { transform: translate(-10%, 10%) scale(1.2); }
      100% { transform: translate(0%, 0%) scale(1); }
    }
  `}</style>
);

export const AuroraHero = ({ children, className }: AuroraHeroProps) => {
  return (
    <div className="h-full w-full">
      <AuroraAnimation />
      <div
        className={cn(
          "relative flex min-h-screen w-full flex-col items-start justify-center overflow-hidden antialiased",
          className
        )}
      >
        {/* Aurora blobs — tinted to brand rust */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute -top-1/4 right-1/4 h-[500px] w-[500px] rounded-full blur-3xl filter opacity-20"
            style={{
              background: "radial-gradient(circle, #B85C38 0%, transparent 70%)",
              animation: "aurora-1 24s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full blur-3xl filter opacity-10"
            style={{
              background: "radial-gradient(circle, #D4C4B0 0%, transparent 70%)",
              animation: "aurora-2 28s ease-in-out infinite",
            }}
          />
        </div>
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </div>
  );
};
