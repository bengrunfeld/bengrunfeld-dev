import { useState } from "react";
import { Title, Text, AnimationWindow, Button, Link } from "../";

import { ButtonContainer, Container, Ball } from "./MoveBall.styles";

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
        <Link
          target="_blank"
          href="https://github.com/bengrunfeld/bengrunfeld-dev/tree/master/components/AnimationsPage/components/MoveBall"
        >
          See Code
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default MoveBall;
