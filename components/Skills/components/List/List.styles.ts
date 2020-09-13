import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  > :first-child {
    padding: 2rem 0 0 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    flex-direction: row;
    justify-content: space-between;

    > * {
      width: 45%;
      padding: 2rem 0;
    }
  }
`;
