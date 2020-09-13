import { Container } from "./ListSection.styles";

type ListSectionProps = {
  children: React.ReactNode;
};

const ListSection = ({ children }: ListSectionProps) => (
  <Container>{children}</Container>
);

export default ListSection;
