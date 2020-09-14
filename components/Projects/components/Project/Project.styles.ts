import styled from "styled-components";

type ContainerType = {
  img: string;
};

export const Container = styled.div<ContainerType>`
  width: 31rem;
  height: 23rem;
  background: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
`;

export const Title = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
