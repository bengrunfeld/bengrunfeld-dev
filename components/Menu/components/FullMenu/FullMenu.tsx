import { Container, MenuItem } from "./FullMenu.styles";

type PropsType = {
  hide: boolean;
};

const FullMenu = ({ hide }: PropsType) => (
  <Container hide={hide}>
    <MenuItem href="/">Home</MenuItem>
    <MenuItem href="/code-examples">Code Examples</MenuItem>
  </Container>
);

export default FullMenu;
