import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 6rem 0 10rem 0;
  background: ${({ theme }) => theme.colors.footerGray};
`;
