import styled from "styled-components";

export const ErrorMessge = styled.div`
  padding: 1rem 0;
`;

export const ErrorText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.darkRed};
`;
