import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.size.tablet}) {
    padding: 2rem;
  }
`;
