import styled from "styled-components";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 50rem;
  }
`;

export const InputField = styled.input`
  padding: 1rem;
`;
