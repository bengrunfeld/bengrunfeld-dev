import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    margin: 0 0.3rem;
  }
`;

type SvgProps = {
  filled: boolean;
};

export const Svg = styled.svg<SvgProps>`
  width: 15px;
  height: 15px;
  fill: ${({ theme, filled }) =>
    filled ? theme.colors.starGreen : theme.colors.starGray};
`;
