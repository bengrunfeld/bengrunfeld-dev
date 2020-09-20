import { Menu, Nav, CodeExamples } from "../";
import { Container, Wrapper } from "./CodeExamplesPage.styles";

type PropsType = {
  children?: React.ReactNode;
};

const CodeExamplesPage = ({ children }: PropsType) => (
  <Container>
    <Menu />
    <Wrapper>
      <Nav />
      <CodeExamples>{children}</CodeExamples>
    </Wrapper>
  </Container>
);

export default CodeExamplesPage;
