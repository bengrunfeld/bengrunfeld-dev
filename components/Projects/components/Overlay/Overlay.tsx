import { Container, Wrapper, Title, Text, Line } from "./Overlay.styles";

type PropsType = {
  title: string;
  children: string;
  showOverlay: boolean;
};

const Overlay = ({ title, children, showOverlay }: PropsType) => {
  return (
    <Wrapper>
      <Container show={showOverlay}>
        <Title>{title}</Title>
        <Line />
        <Text>{children}</Text>
      </Container>
    </Wrapper>
  );
};

export default Overlay;
