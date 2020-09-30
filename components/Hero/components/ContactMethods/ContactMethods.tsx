import { SectionTitle } from "../../../";
import { Container, Text, Link } from "./ContactMethods.styles";

const ContactMethods = () => (
  <Container>
    <SectionTitle>Social Links</SectionTitle>
    <Text>Check out my work online.</Text>
    <Link
      href="https://medium.com/@binyamin"
      target="_blank"
      destination="medium"
    >
      &nbsp;
    </Link>
    <Link
      href="https://www.linkedin.com/in/bengrunfeld/"
      target="_blank"
      destination="linkedin"
    >
      &nbsp;
    </Link>
    <Link
      href="http://meetup.com/Melbourne-TypeScript-Meetup/"
      target="_blank"
      destination="meetup"
    >
      &nbsp;
    </Link>
    {
      <Link
        href="https://github.com/bengrunfeld"
        target="_blank"
        destination="github"
      >
        &nbsp;
      </Link>
    }
  </Container>
);

export default ContactMethods;
