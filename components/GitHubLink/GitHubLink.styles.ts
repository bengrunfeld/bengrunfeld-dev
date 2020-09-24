import styled from "styled-components";

export const Container = styled.div`
  padding-top: 6rem;
`;

export const Link = styled.a`
  width: 20rem;
  height: 7rem;
  display: inline-block;
  padding: 1rem 2rem;

  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.lightGray};
  background-image: url("/github.png");
  background-size: 15rem;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
`;
