import { Container, Title } from "./SectionTitle.styles";

type SectionTitleProps = {
  children: string;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <Container>
    <Title>{children}</Title>
  </Container>
);

export default SectionTitle;
