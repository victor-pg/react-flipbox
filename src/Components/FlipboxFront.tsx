import React from "react";
import { FlipboxItemProps } from "../types";
import { FlipboxItem } from "./FlipboxItem";

export const FlipboxFront: React.FC<Omit<FlipboxItemProps, "side">> = (
  props
) => <FlipboxItem {...props} side="front" />;
