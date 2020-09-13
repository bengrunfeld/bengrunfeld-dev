import { Container, Text } from "./SubTitle.styles";

type JobTitleProps = {
  children: string;
};

const SubTitle = ({ children }: JobTitleProps) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

export default SubTitle;
