import { Container, MessageText } from "./Message.styles";

const responseText = {
  200: "You form was submitted successfully",
  400: "Email address is already in use. Please choose another",
  500: "A server error occurred. Please try to submit again.",
};

interface DataType {
  status: number;
  active: boolean;
}

interface MessageType {
  data: DataType;
}

const Message = ({ data }: MessageType) => {
  if (!data.active) return null;

  const text = responseText[data.status];

  return (
    <Container>
      <MessageText status={data.status}>{text}</MessageText>
    </Container>
  );
};

export default Message;
