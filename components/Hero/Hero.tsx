import { BigName, JobTitle, AboutMe } from "./components";

import { Container, Line, LineWrapper, Wrapper } from "./Hero.styles";

const Hero = () => (
  <Container>
    <Wrapper>
      <BigName name="Ben Grunfeld" />
      <JobTitle title="Full Stack Engineer" />
      <LineWrapper>
        <Line />
      </LineWrapper>
      <AboutMe />
    </Wrapper>
  </Container>
);

export default Hero;
