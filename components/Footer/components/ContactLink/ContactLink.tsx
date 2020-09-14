import { Container, Logo, Text, Link } from "./ContactLink.styles";

type PropsType = {
  link: string;
  children: string;
};

const ContactLink = ({ link, children }: PropsType) => (
  <Link href={children} target="_blank">
    <Container>
      <Logo src={`${link}.png`} />
      <Text>{children}</Text>
    </Container>
  </Link>
);

export default ContactLink;
