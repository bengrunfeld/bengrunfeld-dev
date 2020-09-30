import { useState } from "react";
import { AnimationWindow, Button, Title, Text } from "../";

import { Container, InputContainer, InputField } from "./ProgressBar.styles";

const ProgressBar = () => {
  return (
    <Container>
      <Title>Simple Animation</Title>
      <Text>Press the button to trigger the animation</Text>
      <AnimationWindow></AnimationWindow>

      <InputContainer>
        <InputField />
      </InputContainer>
    </Container>
  );
};

export default ProgressBar;
