import styled from "styled-components";

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.size.pageWidth}) {
    width: 50rem;
  }
`;

type BallType = {
  paused: boolean;
};

export const Ball = styled.div<BallType>`
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.darkGreen};
  border-radius: 50%;
  position: relative;

  @keyframes moveball {
    from {
      left: 0;
    }
    to {
      left: calc(100% - 3rem);
    }
  }

  animation-name: moveball;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: ${({ paused }) => (paused ? "paused" : "running")};
`;
