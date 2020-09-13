import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.turquoise};
  font-size: 2.3rem;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.7rem;
  line-height: 2.5rem;
`;

type LinkType = {
  destination: string;
};

export const Link = styled.button<LinkType>`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.7rem;
  line-height: 2.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 16rem;
  text-align: center;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  background: ${({ theme, destination }) => {
    if (destination === "linkedin") return theme.colors.lightBlue;
    if (destination === "medium") return theme.colors.lightGreen;
    if (destination === "meetup") return theme.colors.lightRed;
    if (destination === "youtube") return theme.colors.lightGray;
  }};

  background-image: ${({ theme, destination }) => {
    if (destination === "medium") return "url(/medium.png)";
    if (destination === "linkedin") return "url(/linkedin.png)";
    if (destination === "meetup") return "url(/meetup.png)";
    if (destination === "youtube") return "url(/youtube.png)";
  }};

  background-position: center;
`;
