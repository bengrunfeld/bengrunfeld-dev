import { InnerPageWrapper, BigTitle, Line, SubTitle } from "../";
import { AboutMe } from "./components";

import { Container } from "./Hero.styles";

const Hero = () => (
  <Container>
    <InnerPageWrapper>
      <BigTitle>Ben Grunfeld</BigTitle>
      <SubTitle>Full Stack Engineer</SubTitle>
      <Line />
      <AboutMe />
    </InnerPageWrapper>
  </Container>
);

export default Hero;
