import styled from "styled-components";

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 50rem;
  }
`;

type SpinnerType = {
  paused: boolean;
};

export const SpinnerObject = styled.div<SpinnerType>`
  border: 1.6rem solid ${({ theme }) => theme.colors.lightGray};
  border-top: 1.6rem solid ${({ theme }) => theme.colors.activeBlue};
  border-radius: 50%;
  width: 12rem;
  height: 12rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spin 1.5s linear infinite;
  animation-play-state: ${({ paused }) => (paused ? "paused" : "running")};
`;
