import { Container } from "./AnimationWindow.styles";

type PropsType = {
  children: React.ReactNode;
  centered?: boolean;
};

const AnimationWindow = ({ centered, children }: PropsType) => (
  <Container centered={centered}>{children}</Container>
);

export default AnimationWindow;
