import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 2rem;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.hoverGray};
  font-size: 1.3rem;

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    font-size: 1.7rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
