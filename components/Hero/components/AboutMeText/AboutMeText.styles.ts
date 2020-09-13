import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.turquoise};
  font-size: 2.3rem;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.7rem;
  line-height: 2.5rem;
`;
