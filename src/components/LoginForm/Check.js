import { Resend, SendInput } from "./Card/CardStyle";

const Check = ({ value, placeholder, type, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <SendInput>
      <Resend
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </SendInput>
  );
};

export default Check;
