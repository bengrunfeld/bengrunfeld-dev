import { Container, Title } from "./CodeExamples.styles";

type PropsType = {
  children?: React.ReactNode;
};

const CodeExamples = ({ children }: PropsType) => (
  <Container>{children}</Container>
);

export default CodeExamples;
