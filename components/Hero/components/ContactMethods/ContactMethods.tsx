import { SectionTitle } from "../../../";
import { Container, Text, Link } from "./ContactMethods.styles";

const ContactMethods = () => (
  <Container>
    <SectionTitle>Social Links</SectionTitle>
    <Text>Check out my work online.</Text>
    <Link destination="medium">&nbsp;</Link>
    <Link destination="linkedin">&nbsp;</Link>
    <Link destination="meetup">&nbsp;</Link>
    <Link destination="youtube">&nbsp;</Link>
  </Container>
);

export default ContactMethods;
