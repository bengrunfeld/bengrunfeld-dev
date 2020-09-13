import { Container } from "./List.styles";

type PropsType = {
  children: React.ReactNode;
};

const List = ({ children }: PropsType) => <Container>{children}</Container>;

export default List;
