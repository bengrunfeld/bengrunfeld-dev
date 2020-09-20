import Link from "next/link";

import { Wrapper, Container, LinkText } from "./FloatingMenu.styles";

const FloatingMenu = () => (
  <Wrapper>
    <Link href="/code-examples">
      <Container>
        <LinkText>Code Examples</LinkText>
      </Container>
    </Link>
  </Wrapper>
);

export default FloatingMenu;
