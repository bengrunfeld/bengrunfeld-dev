import styled from "styled-components";

export const Container = styled.div``;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 2.1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;
