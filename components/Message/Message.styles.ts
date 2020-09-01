import styled from "styled-components";

export const Container = styled.div``;

interface MessageType {
  status: number;
}

export const MessageText = styled.p<MessageType>`
  padding: 1rem;
  font-size: 1.6rem;
  border: 0.2rem solid
    ${({ theme, status }) =>
      status === 200 ? theme.colors.darkGreen : theme.colors.darkRed};
  background: ${({ theme, status }) =>
    status === 200 ? theme.colors.lightGreen : theme.colors.lightRed};
  border-radius: 0.5rem;
  text-align: center;
`;
