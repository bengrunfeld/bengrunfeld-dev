import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    padding: 4rem 4rem 4rem 9rem;
  }
`;
