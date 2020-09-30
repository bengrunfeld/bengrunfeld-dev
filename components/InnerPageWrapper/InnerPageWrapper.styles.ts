import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 80rem;
  }

  h2 {
    padding-bottom: 1.3rem;
  }
`;
