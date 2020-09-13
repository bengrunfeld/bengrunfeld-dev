import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  :hover {
    background: ${({ theme }) => theme.colors.hoverGray};
  }
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.7rem;
  line-height: 2.5rem;
`;
