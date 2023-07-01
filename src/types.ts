import { CSSProperties, ReactNode } from "react";

export type Type = "rotate-left" | "rotate-right" | "rotate-up" | "rotate-down";
export type Trigger = "click" | "mouseenter";

export interface ThirdDimensional {
  enabled: boolean;
  depth?: number;
  scale?: number;
}

export interface EventsHandling {
  node: HTMLDivElement;
  trigger: any;
  handleMouseEnter: (e: MouseEvent) => void;
  handleMouseLeave: (e: MouseEvent) => void;
  handleClick: (e: MouseEvent) => void;
}

export interface Animate {
  type: Type;
  containerNode: React.RefObject<HTMLDivElement>;
}

export interface FlipboxItemProps {
  side: "front" | "back";
  className?: string;
  style?: CSSProperties;
  thirdDimensional?: ThirdDimensional;
  children: ReactNode;
}
