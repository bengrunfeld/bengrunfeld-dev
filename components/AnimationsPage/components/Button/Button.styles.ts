import styled from "styled-components";

export const Btn = styled.button`
  padding: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  background: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.2rem;
`;
