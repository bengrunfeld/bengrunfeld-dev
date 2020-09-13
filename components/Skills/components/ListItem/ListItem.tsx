import { Stars } from "../";
import { Container, Text } from "./ListItem.styles";

type PropsType = {
  children: React.ReactNode;
  stars: string;
};

const ListItem = ({ children, stars }: PropsType) => (
  <Container>
    <Text>{children}</Text>
    <Stars stars={stars} />
  </Container>
);

export default ListItem;
