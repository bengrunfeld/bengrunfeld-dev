import { Container, MenuItem } from "./FullMenu.styles";

type PropsType = {
  hide: boolean;
};

const FullMenu = ({ hide }: PropsType) => (
  <Container hide={hide}>
    <MenuItem href="/">Home</MenuItem>
    <MenuItem href="/code-examples">Code Examples</MenuItem>
    <MenuItem href="/code-examples/basic-form">Basic Form</MenuItem>
    <MenuItem href="/code-examples/animations">Animations</MenuItem>
  </Container>
);

export default FullMenu;
