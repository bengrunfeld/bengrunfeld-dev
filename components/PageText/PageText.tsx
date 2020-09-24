import { Container, Text } from "./PageText.styles";

type PropsType = {
  children: string;
};

const PageText = ({ children }: PropsType) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

export default PageText;
