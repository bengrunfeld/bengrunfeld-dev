import { Menu, Nav, CodeExamples } from "../";
import { Container } from "./CodeExamplesPage.styles";

type PropsType = {
  children?: React.ReactNode;
};

const CodeExamplesPage = ({ children }: PropsType) => (
  <Container>
    <Menu />
    <Nav />
    <CodeExamples>{children}</CodeExamples>
  </Container>
);

export default CodeExamplesPage;
