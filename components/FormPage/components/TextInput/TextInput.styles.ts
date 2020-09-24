import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;

  > label {
    font-family: "Open Sans", sans-serif;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.darkGray};
    display: block;
    padding: 0 0 0.8rem 0;
  }

  > {
    input {
      height: 3.3rem;
      width: 100%;
      max-width: 36rem;
      padding-left: 1rem;

      font-family: "Open Sans", sans-serif;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.darkGray};

      border-radius: 0.3rem;
      border: 1px solid ${({ theme }) => theme.colors.borderGray};
    }
  }
`;
