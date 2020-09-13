import styled from "styled-components";

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HoriontalLine = styled.hr`
  margin: 4rem 0;
  opacity: 0.2;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  width: 90%;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 100%;
  }
`;
