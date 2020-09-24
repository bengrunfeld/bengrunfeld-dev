import { Container, Link } from "./GitHubLink.styles";

type PropsType = {
  href: string;
};

const GitHubLink = ({ href }: PropsType) => (
  <Container>
    <Link href={href} target="_blank" />
  </Container>
);

export default GitHubLink;
