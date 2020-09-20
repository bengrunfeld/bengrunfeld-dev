import styled from "styled-components";

export const Container = styled.div`
  width: 4.4rem;
  height: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.2rem 0;

  border: 0.2rem solid ${({ theme }) => theme.colors.white};
  border-radius: 0.7rem;
`;

export const Line = styled.div`
  width: 70%;
  height: 0.3rem;
  border-top: 0.3rem solid ${({ theme }) => theme.colors.white};
`;
