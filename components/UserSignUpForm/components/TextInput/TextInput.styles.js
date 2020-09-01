import styled from "styled-components";

export const ErrorMessage = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.errorRed};
  margin-top: 0.25rem;
`;

export const FieldLabel = styled.label`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const InputField = styled.input`
  width: 100% !important;

  &[type="text"] {
    font-size: 1.5rem;
  }

  &[type="email"] {
    font-size: 1.5rem;
  }

  &[type="password"] {
    font-size: 1.5rem;
  }

  &[type="number"] {
    font-size: 1.5rem;
  }
`;
