import { Btn } from "./Button.styles";

type PropsType = {
  children: string;
  clickFn?: () => void;
};

const Button = ({ children, clickFn }: PropsType) => (
  <Btn onClick={clickFn}>{children}</Btn>
);

export default Button;
