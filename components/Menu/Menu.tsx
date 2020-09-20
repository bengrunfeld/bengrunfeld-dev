import { useState } from "react";

import { PancakeButton, FullMenu } from "./components";
import { Container, NavBar, NavWrapper } from "./Menu.styles";

const Menu = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <Container>
      <NavWrapper>
        <NavBar>
          <PancakeButton setHideMenu={setHideMenu} hideMenu={hideMenu} />
        </NavBar>
      </NavWrapper>
      <FullMenu hide={hideMenu} />
    </Container>
  );
};

export default Menu;
