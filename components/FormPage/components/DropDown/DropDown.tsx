import { useField, FieldProps } from "formik";
import Select, { Option, ReactSelectProps } from "react-select";
import {
  ErrorMessage,
  ErrorText,
  SelectContainer,
  FieldLabel,
} from "./DropDown.styles";

interface PropsType {
  [x: string]: any;
  name: string;
}

const DropDown: React.FC<ReactSelectProps & FieldProps> = ({
  label,
  ...props
}: PropsType) => {
  // This isn't an input, so instead of using the values in 'field' directly,
  // we'll use 'meta' and 'helpers'.

  const [field, meta, helpers] = useField(props);

  const { options } = props;
  const { touched, error, value } = meta;
  const { setValue } = helpers;

  return (
    <div>
      <FieldLabel htmlFor={props.id || props.name}>{label}</FieldLabel>

      <SelectContainer>
        <Select
          options={options}
          name={field.name}
          onChange={(option: Option) => setValue(option.value)}
          instanceId={props.iid}
        />
      </SelectContainer>

      {error ? (
        <ErrorMessage>
          <ErrorText>{error}</ErrorText>
        </ErrorMessage>
      ) : null}
    </div>
  );
};

export default DropDown;
