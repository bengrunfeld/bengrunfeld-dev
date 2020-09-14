import { Container, Title } from "./BigTitle.styles";

type BigNameProps = {
  children: string;
  white?: boolean;
};

const BigTitle = ({ children, white }: BigNameProps) => (
  <Container>
    <Title white={white}>{children}</Title>
  </Container>
);

export default BigTitle;
