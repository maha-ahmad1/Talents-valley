import { InputField1, Input } from "./Card/CardStyle";

const InputField = ({
  value,
  placeholder,
  type,
  onChange,
  className,
  name,
}) => {
  return (
    <InputField1>
      <Input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        name={name}
      />
    </InputField1>
  );
};

export default InputField;
