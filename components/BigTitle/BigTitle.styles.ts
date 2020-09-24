import styled from "styled-components";

export const Container = styled.div``;

type TitleType = {
  white?: boolean;
  centered?: boolean;
};

export const Title = styled.h2<TitleType>`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme, white }) =>
    white ? theme.colors.white : theme.colors.turquoise};
  font-size: 5.4rem;
  text-align: ${({ centered }) => (centered ? "center" : "left")};
`;
