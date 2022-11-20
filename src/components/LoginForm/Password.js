import { InputPassword, Input, Eye } from "./Card/CardStyle";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";

const Password = ({ value, placeholder, onChange, className, name }) => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <InputPassword>
        <Input
          className={className}
          type={passwordType}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={ onChange}
        />
        <Eye onClick={togglePassword}>
          {passwordType === "password" ? (
            <AiOutlineEyeInvisible />
          ) : (
            <AiOutlineEye />
          )}
        </Eye>
      </InputPassword>
    </>
  );
};

export default Password;
