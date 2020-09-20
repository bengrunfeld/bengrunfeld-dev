import { Container, Title } from "./CodeExamples.styles";

type PropsType = {
  children?: React.ReactNode;
};

const CodeExamples = ({ children }: PropsType) => (
  <Container>
    <Title>Hi</Title>
    {children}
  </Container>
);

export default CodeExamples;
