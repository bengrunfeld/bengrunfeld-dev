import { BigTitle } from "../";

import { MoveBall, ProgressBar } from "./components";

import { Container } from "./AnimationsPage.styles";

const AnimationsPage = () => (
  <Container>
    <BigTitle>Animations</BigTitle>

    <MoveBall />
    <ProgressBar />
  </Container>
);

export default AnimationsPage;
