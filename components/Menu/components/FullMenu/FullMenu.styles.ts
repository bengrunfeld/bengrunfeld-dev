import styled from "styled-components";

type ContainerType = {
  hide: boolean;
};

export const Container = styled.div<ContainerType>`
  display: ${({ hide }) => (hide ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkGray};
`;

export const MenuItem = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  text-align: center;

  &:hover {
    font-weight: 400;
  }
`;
