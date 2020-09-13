import { SectionTitle } from "../../../";
import { List, ListSection, ListItem } from "../";

import { Container } from "./SkillsList.styles";

const SkillsList = () => (
  <Container>
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListSection>
        <ListItem stars="5">Javascript (ES6+)</ListItem>
        <ListItem stars="5">HTML(5)</ListItem>
        <ListItem stars="5">CSS(3)</ListItem>
        <ListItem stars="5">Node.JS </ListItem>
        <ListItem stars="5">TypeScript </ListItem>
        <ListItem stars="5">React </ListItem>
        <ListItem stars="5">NextJS </ListItem>
        <ListItem stars="5">Redux</ListItem>
        <ListItem stars="5">REST</ListItem>
        <ListItem stars="5">GraphQL </ListItem>
        <ListItem stars="5">Apollo </ListItem>
      </ListSection>
      <ListSection>
        <ListItem stars="5">CircleCI</ListItem>
        <ListItem stars="5">ORM&apos;s</ListItem>
        <ListItem stars="5">NoSQL</ListItem>
        <ListItem stars="4">D3</ListItem>
        <ListItem stars="4">Data Visualization</ListItem>
        <ListItem stars="4">PostgreSQL</ListItem>
        <ListItem stars="4">MySQL</ListItem>
        <ListItem stars="4">SQL</ListItem>
        <ListItem stars="4">Docker</ListItem>
        <ListItem stars="3">AWS</ListItem>
        <ListItem stars="3">Google Cloud</ListItem>
      </ListSection>
    </List>
  </Container>
);

export default SkillsList;
