import { useState } from "react";
import Link from "next/link";

import {
  Container,
  NavContainer,
  Title,
  ToggleNavButton,
  Wrapper,
  LinkText,
} from "./Nav.styles";

const Nav = () => {
  const [hideMenu, setHideMenu] = useState(false);

  return (
    <Container>
      <Wrapper hideMenu={hideMenu}>
        <NavContainer>
          <Link href="/">
            <LinkText>Home</LinkText>
          </Link>

          <Title>Code Examples</Title>

          <Link href="/code-examples/basic-form">
            <LinkText>Basic Form</LinkText>
          </Link>

          <Link href="/code-examples/animations">
            <LinkText>Animations</LinkText>
          </Link>
        </NavContainer>
      </Wrapper>
      <ToggleNavButton
        hideMenu={hideMenu}
        onClick={() => setHideMenu(!hideMenu)}
      >
        {hideMenu ? <span>&gt;</span> : <span>&lt;</span>}
      </ToggleNavButton>
    </Container>
  );
};

export default Nav;
