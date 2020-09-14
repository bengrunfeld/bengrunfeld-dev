import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 4rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
