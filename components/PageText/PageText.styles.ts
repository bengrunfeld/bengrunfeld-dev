import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;
