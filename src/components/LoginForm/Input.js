import { InputField1, Input } from "./Card/CardStyle";

const InputField = ({ value, placeholder, type, onChange, className,name }) => {
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   onChange(value);
  // };

  return (
    <InputField1>
      {/* {label && <Label htmlFor="input-field">{label}</Label>} */}
      <Input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
        name={name}
      />
    </InputField1>
  );
};

export default InputField;
