import { Hero, Skills, Projects, Footer, Menu } from "../";

import { Container } from "./HomePage.styles";

const HomePage = () => (
  <Container>
    <Menu />
    <Hero />
    <Skills />
    <Projects />
    <Footer />
  </Container>
);

export default HomePage;
