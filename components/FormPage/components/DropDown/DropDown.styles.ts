import styled from "styled-components";

export const Container = styled.div``;

export const ErrorMessage = styled.div`
  padding: 1rem 0;
`;

export const ErrorText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.darkRed};
`;

export const FieldLabel = styled.label`
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.darkGray};
  display: block;
  padding: 0 0 0.8rem 0;
`;

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 36rem;

  > * {
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif;
  }
`;
