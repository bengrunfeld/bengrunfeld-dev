import { useField } from "formik";
import Select, { Option, ReactSelectProps } from "react-select";
import { ErrorMessage, SelectField, FieldLabel } from "./DropDown.styles";

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
      {/*<SelectField
              {...field}
              {...props}
              value={value || ""}
              onChange={e => setValue(e.target.value)}
            >
              <option value="" disabled></option>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </SelectField>*/}

      <Select
        options={options}
        name={field.name}
        onChange={(option: Option) => setValue(option.value)}
        instanceId={props.iid}
      />

      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
};

export default DropDown;
