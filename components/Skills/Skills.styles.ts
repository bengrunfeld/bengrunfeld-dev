import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.lightBlue};
  padding: 4rem 0;
`;
