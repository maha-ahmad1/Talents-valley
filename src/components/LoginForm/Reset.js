import Card from "./Card/Card";
import Logo from "./Logo";
import { Check, Div, Heading, ParagraphR } from "./Card/CardStyle";
import Button from "./Button";
import { Link } from "react-router-dom";

import check from "../../assets/images/check.png";

export default function Reset() {
  return (
    <Card>
      <Logo />
      <Div>
        <Check src={check} alt="check" />
      </Div>
      <Div>
        <Heading>Password Reset</Heading>
      </Div>
      <Div>
        <ParagraphR> Your Password has been Successfully Reset.</ParagraphR>
      </Div>
      <ParagraphR>Click Below To Login</ParagraphR>
      <Link to='/'>
      <Button text="Sign In " />
      </Link>
    </Card>
  );
}
