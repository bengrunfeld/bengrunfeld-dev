import { useState } from "react";
import { Title, Text, AnimationWindow, Button, Link } from "../";

import { ButtonContainer, Container, SpinnerObject } from "./Spinner.styles";

const Spinner = () => {
  const [paused, setPaused] = useState(true);

  return (
    <Container>
      <Title>Spinner</Title>
      <Text>Press the button to trigger the animation</Text>
      <AnimationWindow centered={true}>
        <SpinnerObject paused={paused} />
      </AnimationWindow>

      <ButtonContainer>
        <Button clickFn={() => setPaused(!paused)}>
          {paused ? "Start Spinner" : "Pause"}
        </Button>
        <Link
          target="_blank"
          href="https://github.com/bengrunfeld/bengrunfeld-dev/tree/master/components/AnimationsPage/components/Spinner"
        >
          See Code
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default Spinner;
