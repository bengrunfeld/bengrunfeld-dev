import { Container } from "./AnimationWindow.styles";

type PropsType = {
  children: React.ReactNode;
};

const AnimationWindow = ({ children }: PropsType) => (
  <Container>{children}</Container>
);

export default AnimationWindow;
