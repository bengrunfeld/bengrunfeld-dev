import { useState } from "react";

import {
  Container,
  NavContainer,
  Title,
  ToggleNavButton,
  Wrapper,
} from "./Nav.styles";

const Nav = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <Container>
      <Wrapper hidden={hidden}>
        <NavContainer>
          <Title>Code Examples</Title>
        </NavContainer>
      </Wrapper>
      <ToggleNavButton onClick={() => setHidden(!hidden)}>
        {hidden ? <span>&gt;</span> : <span>&lt;</span>}
      </ToggleNavButton>
    </Container>
  );
};

export default Nav;
