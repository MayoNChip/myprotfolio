"use client";
import { ReactNode, RefObject } from "react";
import { cn } from "../../lib/utils";

interface SectionWrapperProps {
  sectionId: string;
  sectionRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  sectionId,
  sectionRef,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className={cn("relative", className)}
      data-section={sectionId}
    >
      {children}
    </div>
  );
}