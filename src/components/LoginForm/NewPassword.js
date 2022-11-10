import Card from "./Card/Card";
import Logo from "./Logo";
import { Arrow } from "./Card/CardStyle";
import Button from "./Button";
import { useState } from "react";
import Password from "./Password";
import { Label, Pcreate } from "./Card/CardStyle";
import { Link } from "react-router-dom";

export default function Forgot() {
  const [inputValue, setInputValue] = useState({ password: "" });
  const { email } = inputValue;

  const handleChange = (inputValue) => {
    setInputValue({ email: inputValue });
    console.log(inputValue);
  };

  return (
    <Card>
      <Logo>
        <Link to="/">
          <Arrow />
        </Link>
      </Logo>
      <Pcreate>Create New Password</Pcreate>
      <Label>New Password</Label>
      <Password
        type={"text"}
        onChange={handleChange}
        value={email}
        name={"password"}
      />
      <Label>Re-Enter Password</Label>
      <Password
        type={"text"}
        onChange={handleChange}
        value={email}
        name={"password"}
      />
      <Button text="Continue" link="/Reset" />
    </Card>
  );
}
