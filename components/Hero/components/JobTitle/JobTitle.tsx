import { Container, Text } from "./JobTitle.styles";

type JobTitleProps = {
  title: string;
};

const JobTitle = ({ title }: JobTitleProps) => (
  <Container>
    <Text>{title}</Text>
  </Container>
);

export default JobTitle;
