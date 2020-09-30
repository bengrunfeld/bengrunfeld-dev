import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.2rem;
`;
