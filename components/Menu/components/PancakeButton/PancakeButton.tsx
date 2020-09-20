import { Container, Line } from "./PancakeButton.styles";

type PropsType = {
  hideMenu: boolean;
  setHideMenu: (a: boolean) => void;
};

const PancakeButton = ({ hideMenu, setHideMenu }: PropsType) => (
  <Container onClick={() => setHideMenu(!hideMenu)}>
    <Line />
    <Line />
    <Line />
  </Container>
);

export default PancakeButton;
