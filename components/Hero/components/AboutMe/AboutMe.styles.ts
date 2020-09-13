import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :first-child {
    width: 30rem;
    padding: 2rem 0 4rem 0;
  }

  > :last-child {
    width: 30rem;
    padding: 4rem 0 0 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.tablet}) {
    > :first-child {
      width: 70%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    > :first-child {
      width: 27.5rem;
      padding: 2rem 3rem 0 0;
    }

    > :last-child {
      width: 27.5rem;
      padding: 2rem 0 0 0;
    }
  }
`;
