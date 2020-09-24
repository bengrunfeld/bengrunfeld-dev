import { useField } from "formik";
import { ErrorMessge, ErrorText } from "./Input.styles";

interface PropsType {
  [x: string]: any;
  name: string;
  showError: boolean;
}

const Input = ({ showError, label, ...props }: PropsType) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input {...field} {...props} />

      {meta.touched && meta.error && showError ? (
        <ErrorMessge>
          <ErrorText>{meta.error}</ErrorText>
        </ErrorMessge>
      ) : null}
    </>
  );
};

export default Input;
