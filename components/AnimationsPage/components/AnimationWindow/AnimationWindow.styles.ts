import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0 3rem 0;
  padding: 1rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.3rem;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 50rem;
  }
`;
