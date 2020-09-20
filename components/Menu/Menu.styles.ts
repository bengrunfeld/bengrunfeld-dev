import styled from "styled-components";

export const Container = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  position: relative;
  height: 5.2rem;
`;

export const NavBar = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  z-index: 999;

  background: ${({ theme }) => theme.colors.darkGray};
  padding: 1rem 2rem;
`;

export const MenuTitle = styled.h3``;
