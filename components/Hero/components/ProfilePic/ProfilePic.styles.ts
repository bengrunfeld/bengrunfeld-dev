import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    position: relative;
    top: 5rem;
  }
`;

export const Image = styled.img`
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 50%;
  border: 1rem solid ${({ theme }) => theme.colors.lightBlue};
`;
