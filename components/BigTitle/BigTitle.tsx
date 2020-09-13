import { Container, Title } from "./BigTitle.styles";

type BigNameProps = {
  children: string;
};

const BigTitle = ({ children }: BigNameProps) => (
  <Container>
    <Title>{children}</Title>
  </Container>
);

export default BigTitle;
