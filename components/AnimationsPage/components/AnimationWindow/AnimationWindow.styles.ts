import styled from "styled-components";

type ContainerType = {
  centered?: boolean;
};

export const Container = styled.div<ContainerType>`
  margin: 2rem 0 3rem 0;
  padding: 1rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.3rem;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 50rem;
  }

  display: ${({ centered }) => (centered ? "flex" : "block")};
  justify-content: ${({ centered }) => (centered ? "center" : "")};
`;
