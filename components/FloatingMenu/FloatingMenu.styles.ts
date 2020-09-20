import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    display: block;
  }
`;

export const Container = styled.div`
  position: fixed;
  right: 6rem;
  top: 8rem;
  z-index: 999;

  background: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  width: 11.5rem;
  border-radius: 0.7rem;

  &:hover {
    background: ${({ theme }) => theme.colors.borderGray};
  }
`;

export const LinkText = styled.a`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  color: white;
  text-align: center;
  cursor: pointer;
`;
