import { Container, Title } from "./BigName.styles";

type BigNameProps = {
  name: string;
};

const BigName = ({ name }: BigNameProps) => (
  <Container>
    <Title>{name}</Title>
  </Container>
);

export default BigName;
