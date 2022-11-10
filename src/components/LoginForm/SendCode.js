import Card from "./Card/Card";
import Logo from "./Logo";
import { Arrow } from "./Card/CardStyle";
import Button from "./Button";
import Check from "./Check";
import { useState } from "react";
import {
  Paragraph,
  Paragraph2,
  SendInput,
  SendInput1,
  SendInput2,
} from "./Card/CardStyle";
import { Link } from "react-router-dom";
import Text from "./Text";

export default function SendCode() {
  const [inputValue, setInputValue] = useState({});
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
      <Paragraph>Check Your Email</Paragraph>
      <Paragraph2>
        We have sent you an email that contains a code to reset your password{" "}
      </Paragraph2>
      <SendInput>
        <SendInput1>
          <Check type="text" onChange={handleChange} value={email} />
          <Check type="text" onChange={handleChange} value={email} />
          <Check type="text" onChange={handleChange} value={email} />
        </SendInput1>
        <SendInput2>
          <Check type="text" onChange={handleChange} value={email} />
          <Check type="text" onChange={handleChange} value={email} />
          <Check type="text" onChange={handleChange} value={email} />
        </SendInput2>
      </SendInput>
      <Button text="Continue" link="/NewPassword" />
      <Text
        className="link"
        Sentence="Didn't get the code?"
        text="Resend"
        link="/SignUp"
      />
    </Card>
  );
}
