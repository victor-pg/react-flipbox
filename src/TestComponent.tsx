import React from "react";

interface Props {
  text?: number;
}
const MyCounter = ({ text }: Props) => <>Test Component: {text}</>;

export default MyCounter;
