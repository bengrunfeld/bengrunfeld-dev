import { Hero, Skills, Projects } from "../";
import { Container } from "./HomePage.styles";

const HomePage = () => (
  <Container>
    <Hero />
    <Skills />
    <Projects />
  </Container>
);

export default HomePage;
