import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    padding: 4rem 4rem 4rem 9rem;
  }
`;
