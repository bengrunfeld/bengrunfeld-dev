import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;

  height: 200rem;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    padding: 4rem 4rem 4rem 9rem;
  }
`;

export const Title = styled.p`
  font-size: 3rem;
`;
