import styled from "styled-components";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 50rem;
  }

  > * {
    width: 100%;
  }
`;

export const FormStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > * {
    display: inline-block;
  }

  input {
    padding: 2.2rem 1rem;
  }

  label {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  font-family: "Open Sans", sans-serif;
  width: 6rem;
  height: 3rem;
`;
