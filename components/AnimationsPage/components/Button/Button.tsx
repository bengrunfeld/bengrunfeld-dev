import { Btn } from "./Button.styles";

type PropsType = {
  children: string;
  clickFn?: () => void;
  type?: any;
};

const Button = ({ children, clickFn, type }: PropsType) => (
  <Btn type={type && type} onClick={clickFn}>
    {children}
  </Btn>
);

export default Button;
