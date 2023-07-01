import React from "react";
import { FlipboxItemProps } from "../types";
import { isValidThirdDimensionalObj } from "../utils";

export const FlipboxItem: React.FC<FlipboxItemProps> = ({
  side,
  className: _className = "",
  style,
  children,
  thirdDimensional,
}) => {
  const className = `flipbox-${side} ${_className}`;

  const isThirdDimensionalEnabled =
    isValidThirdDimensionalObj(thirdDimensional);

  const thirdDimensionalStyle = isThirdDimensionalEnabled
    ? {
        transform: `translateZ(${thirdDimensional?.depth ?? 90}px) scale(${
          thirdDimensional?.scale ?? 0.91
        })`,
      }
    : {};

  const content = isThirdDimensionalEnabled ? (
    <div className="flipbox-3d" style={thirdDimensionalStyle}>
      {children}
    </div>
  ) : (
    children
  );

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
};
