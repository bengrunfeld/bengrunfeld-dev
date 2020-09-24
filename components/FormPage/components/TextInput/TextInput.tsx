import { Input } from "../";
import { Container } from "./TextInput.styles";

type PropsType = {
  props?: any;
  name: string;
  showError: boolean;
  label: string;
  type: string;
  placeholder?: string;
};

const TextInput = (props: PropsType) => (
  <Container>
    <Input {...props} />
  </Container>
);

export default TextInput;
