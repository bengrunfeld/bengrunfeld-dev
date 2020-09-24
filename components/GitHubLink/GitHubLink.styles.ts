import styled from "styled-components";

export const Container = styled.div`
  padding-top: 6rem;
`;

export const Link = styled.a`
  width: 15rem;
  height: 6rem;
  display: inline-block;
  padding: 1rem 2rem;

  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.lightGray};
  background-image: url("/github.png");
  background-size: 12rem;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
`;
