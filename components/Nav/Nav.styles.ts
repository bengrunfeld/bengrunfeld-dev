import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    display: block;
  }
`;

type WrapperType = {
  hideMenu: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  display: ${({ hideMenu }) => (hideMenu ? "none" : "block")};
  position: relative;
  width: 30rem;
  height: 100vh;
`;

export const NavContainer = styled.div`
  width: inherit;
  background: ${({ theme }) => theme.colors.lightGray};
  height: inherit;
  position: fixed;
  padding: 4rem 2rem;

  > :first-child {
    font-size: 2.2rem;
  }

  > * {
    display: block;
    margin: 2rem 0;
  }
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

type ToggleNavType = {
  hideMenu: boolean;
};

export const ToggleNavButton = styled.div<ToggleNavType>`
  width: 5rem;
  height: 5rem;

  background: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;

  position: fixed;
  top: 5rem;
  left: ${({ hideMenu }) => (hideMenu ? "0rem" : "30rem")};
  padding-right: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  font-family: "Open Sans", sans-serif;
`;

export const LinkText = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
`;
