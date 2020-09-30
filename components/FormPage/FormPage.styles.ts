import styled from "styled-components";

export const Container = styled.div`
  h2 {
    padding-bottom: 5rem;
  }
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const SubmitContainer = styled.div`
  padding-top: 3rem;
`;

export const SubmitButton = styled.button`
  padding: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.lightBlue};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  &:active {
    background: ${({ theme }) => theme.colors.activeBlue};
  }
`;

export const FormStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  > * {
    margin-bottom: 2rem;
  }
`;
