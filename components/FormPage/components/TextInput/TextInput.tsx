import { Input } from "../";
import { Container } from "./TextInput.styles";

type PropsType = {
  props: any;
};

const TextInput = (props: PropsType) => (
  <Container>
    <Input {...props} />
  </Container>
);

export default TextInput;
