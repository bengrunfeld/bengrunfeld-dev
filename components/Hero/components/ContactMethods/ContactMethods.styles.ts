import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.7rem;
  line-height: 2.5rem;
  padding-bottom: 2rem !important;
`;

type LinkType = {
  destination: string;
};

export const Link = styled.a<LinkType>`
  cursor: pointer;
  display: block;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.7rem;
  line-height: 2.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.7rem 0;
  width: 16rem;
  text-align: center;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};

  background: ${({ theme, destination }) => {
    if (destination === "linkedin") return theme.colors.lightBlue;
    if (destination === "medium") return theme.colors.lightGreen;
    if (destination === "meetup") return theme.colors.lightRed;
    if (destination === "github") return theme.colors.lightGray;
  }};

  background-image: ${({ destination }) => {
    if (destination === "medium") return "url(/medium.png)";
    if (destination === "linkedin") return "url(/linkedin.png)";
    if (destination === "meetup") return "url(/meetup.png)";
    if (destination === "github") return "url(/github.png)";
  }};

  background-position: center;

  background-size: auto 3.5rem;
  background-repeat: no-repeat;
`;
