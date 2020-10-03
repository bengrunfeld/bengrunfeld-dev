import { BigTitle } from "../";

import { MoveBall, ProgressBar, Spinner } from "./components";

import { Container } from "./AnimationsPage.styles";

const AnimationsPage = () => (
  <Container>
    <BigTitle>Animations</BigTitle>

    <MoveBall />
    <ProgressBar />
    <Spinner />
  </Container>
);

export default AnimationsPage;
