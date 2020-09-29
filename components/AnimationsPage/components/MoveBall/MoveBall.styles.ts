import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  padding: 1rem 0 2rem 0;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
`;

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
