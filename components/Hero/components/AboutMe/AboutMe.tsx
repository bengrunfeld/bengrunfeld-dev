import { ProfilePic, AboutMeText, ContactMethods } from "../";
import { Container } from "./AboutMe.styles";

const AboutMe = () => (
  <Container>
    <AboutMeText />
    <ProfilePic src="/bengrunfeld.JPG" />
    <ContactMethods />
  </Container>
);

export default AboutMe;
