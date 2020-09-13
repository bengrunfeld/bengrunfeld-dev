import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;

  p {
    padding: 2rem 0 0 0;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Line = styled.hr`
  margin: 4rem 0;
  opacity: 0.2;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  width: 90%;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 80%;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 80rem;
  }
`;
