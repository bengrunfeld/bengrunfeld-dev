import { useState } from "react";
import { AnimationWindow, Button } from "../";

import {
  ButtonContainer,
  Container,
  Title,
  Text,
  Ball,
} from "./MoveBall.styles";

const MoveBall = () => {
  const [paused, setPaused] = useState(true);

  return (
    <Container>
      <Title>Simple Animation</Title>
      <Text>Press the button to trigger the animation</Text>
      <AnimationWindow>
        <Ball paused={paused} />
      </AnimationWindow>

      <ButtonContainer>
        <Button clickFn={() => setPaused(!paused)}>
          {paused ? "Move Ball" : "Pause"}
        </Button>
        <Button>See Code</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MoveBall;
