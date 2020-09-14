import { ProjectList } from "./components";

import { InnerPageWrapper, BigTitle, SubTitle, Line } from "../";
import { Container } from "./Projects.styles";

const Projects = () => (
  <Container>
    <InnerPageWrapper>
      <BigTitle>Projects</BigTitle>
      <SubTitle>
        &quot;How to beat your personal record? Start running as fast as you can
        and slowly, slowly increase your speed.&quot; – Mission Grandma
      </SubTitle>
      <Line />
      <ProjectList />
    </InnerPageWrapper>
  </Container>
);

export default Projects;
