import React, {
  CSSProperties,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  animate,
  animateByClick,
  attachEvents,
  detachEvents,
  isValidTrigger,
  removeAnimation,
} from "../utils";
import { FlipboxItemProps, ThirdDimensional, Trigger, Type } from "../types";

interface Props {
  type?: Type;
  className?: string;
  style?: CSSProperties;
  trigger?: Trigger;
  duration?: number;
  thirdDimensional?: ThirdDimensional;
  children: [ReactElement, ReactElement];
}

export const Flipbox: React.FC<Props> = ({
  className: _className = "",
  style,
  trigger: _trigger = "mouseenter",
  type = "rotate-left",
  duration = 0.8,
  children: _children,
  thirdDimensional,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const trigger = isValidTrigger(_trigger) ? _trigger : "mouseenter";

  const handleMouseEnter = useCallback(
    () => animate({ type, containerNode: containerRef }),
    [type, containerRef]
  );

  const handleMouseLeave = useCallback(
    () => removeAnimation({ type, containerNode: containerRef }),
    [type, containerRef]
  );

  const handleClick = useCallback(
    () => animateByClick({ type, containerNode: containerRef }),
    [type, containerRef]
  );

  useEffect(() => {
    const node = ref.current;
    const containerNode = containerRef.current;

    if (node && containerNode) {
      attachEvents({
        node,
        trigger,
        handleMouseEnter,
        handleMouseLeave,
        handleClick,
      });
    } else {
      console.error("Could not find flipbox container");
    }

    return () => {
      if (node) {
        detachEvents({
          node,
          trigger,
          handleMouseEnter,
          handleMouseLeave,
          handleClick,
        });
      }
    };
  }, [trigger, handleClick, handleMouseEnter, handleMouseLeave]);

  const className = `flipbox ${_className}`;
  const flipboxContainerClassName = `flipbox-container ${type}`;

  const flipboxContainerStyle = {
    transition: `transform ${duration}s`,
  };

  const children = React.Children.map(_children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        thirdDimensional,
      } as FlipboxItemProps);
    }
    return child;
  });

  return (
    <div ref={ref} className={className} style={style}>
      <div
        ref={containerRef}
        className={flipboxContainerClassName}
        style={flipboxContainerStyle}
      >
        {children}
      </div>
    </div>
  );
};
