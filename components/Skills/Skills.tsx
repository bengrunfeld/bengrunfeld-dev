import { InnerPageWrapper, BigTitle, Line, SubTitle } from "../";
import { SkillsList } from "./components";
import { Container } from "./Skills.styles";

const Skills = () => (
  <Container>
    <InnerPageWrapper>
      <BigTitle centered={true}>Skills</BigTitle>
      <SubTitle>
        &quot;We cannot solve our problems with the same thinking we used when
        we created them.&quot; – Albert Einstein
      </SubTitle>
      <Line />
      <SkillsList />
    </InnerPageWrapper>
  </Container>
);

export default Skills;
