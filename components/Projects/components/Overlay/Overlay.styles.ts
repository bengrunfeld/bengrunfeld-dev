import styled from "styled-components";

type ContainerType = {
  show: boolean;
};

export const Container = styled.div<ContainerType>`
  display: ${({ show }) => (show ? "block" : "none")};
  background: ${({ theme }) => theme.colors.turquoise};
  opacity: 0.93;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 2rem;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 31rem;
  height: 23rem;
`;

export const Title = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.7rem;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid white;
  margin: 2rem 0;
  display: block;
  opacity: 0.8;
`;
