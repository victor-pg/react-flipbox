import { Animate, EventsHandling, ThirdDimensional, Trigger } from "../types";

export const attachEvents = ({
  node,
  trigger,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: EventsHandling) => {
  switch (trigger) {
    case "mouseenter":
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
      break;
    case "click":
      node.addEventListener("click", handleClick);
      break;
  }
};

export const detachEvents = ({
  node,
  trigger,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: EventsHandling) => {
  switch (trigger) {
    case "mouseenter":
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
      break;
    case "click":
      node.removeEventListener("click", handleClick);
      break;
  }
};

export const animate = ({ type, containerNode }: Animate) => {
  if (containerNode.current) {
    containerNode.current.classList.add(`anim-${type}`);
  }
};

export const animateByClick = ({ type, containerNode }: Animate) => {
  const className = `anim-${type}`;
  const node = containerNode.current;

  if (node) {
    if (node.classList.contains(className)) {
      node.classList.remove(className);
    } else {
      node.classList.add(className);
    }
  }
};

export const removeAnimation = ({ type, containerNode }: Animate) => {
  if (containerNode.current) {
    containerNode.current.classList.remove(`anim-${type}`);
  }
};

export const isValidTrigger = (trigger: Trigger): trigger is Trigger =>
  trigger === "click" || trigger === "mouseenter";

export const isValidThirdDimensionalObj = (
  thirdDimensional: ThirdDimensional | undefined
): thirdDimensional is ThirdDimensional => !!thirdDimensional?.enabled;
