import { Hero, Skills, Projects, Footer } from "../";
import { Container } from "./HomePage.styles";

const HomePage = () => (
  <Container>
    <Hero />
    <Skills />
    <Projects />
    <Footer />
  </Container>
);

export default HomePage;
