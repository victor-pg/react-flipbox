import React from "react";
import { Flipbox } from "./Components/Flipbox";
import { FlipboxFront } from "./Components/FlipboxFront";
import { FlipboxBack } from "./Components/FlipboxBack";
import "./scss/flipbox.scss";

const App = () => (
  <Flipbox
    trigger="mouseenter"
    duration={1}
    type="rotate-left"
    thirdDimensional={{
      enabled: true,
    }}
  >
    <FlipboxFront>
      <h1>Flipbox Front</h1>
    </FlipboxFront>
    <FlipboxBack>
      <h1>Flipbox Back</h1>
    </FlipboxBack>
  </Flipbox>
);

export default App;
