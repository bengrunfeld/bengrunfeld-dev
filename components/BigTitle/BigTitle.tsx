import { Container, Title } from "./BigTitle.styles";

type BigNameProps = {
  children: string;
  white?: boolean;
  centered?: boolean;
};

const BigTitle = ({ children, white, centered }: BigNameProps) => (
  <Container>
    <Title white={white} centered={centered}>
      {children}
    </Title>
  </Container>
);

export default BigTitle;
