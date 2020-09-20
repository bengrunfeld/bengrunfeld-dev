import { Hero, Skills, Projects, Footer, FloatingMenu, Menu } from "../";

import { Container } from "./HomePage.styles";

const HomePage = () => (
  <Container>
    <Menu />
    <FloatingMenu />
    <Hero />
    <Skills />
    <Projects />
    <Footer />
  </Container>
);

export default HomePage;
