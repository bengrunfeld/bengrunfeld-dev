import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.size.tablet}) {
    flex-direction: row;
    padding: 2rem;
  }

  > * {
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.size.tablet}) {
      width: 50%;
    }
  }
`;
