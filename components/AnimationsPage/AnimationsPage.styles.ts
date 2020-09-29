import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.darkGray};
  padding-bottom: 3rem;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;
