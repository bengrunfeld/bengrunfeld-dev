import { useField } from "formik";
import { ErrorMessage, InputField, FieldLabel } from "./TextInput.styles";

interface PropsType {
  [x: string]: any;
  name: string;
}

const TextInput = ({ label, ...props }: PropsType) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <FieldLabel htmlFor={props.id || props.name}>{label}</FieldLabel>

      <InputField {...field} {...props} />

      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

export default TextInput;
