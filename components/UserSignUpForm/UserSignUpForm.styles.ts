import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: ${({ theme }) => theme.size.tablet}) {
    padding: 0 2rem;
  }
`;

export const SubmitButton = styled.button`
  font-size: 2rem;
  padding: 1rem 4rem;
  letter-spacing: 0.1rem;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem !important;
`;
