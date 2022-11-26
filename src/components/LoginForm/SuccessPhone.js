import Card from "./Card/Card";
import Navbar from "../../components/Nav/Navbar";
import { Check, Div, Paragraphs, Title, Divs } from "./Card/CardStyle";
import Button from "./Button";
import { Link } from "react-router-dom";

import check from "../../assets/images/check.png";

export default function SuccessPhone() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>Phone Verification</Title>
        <Div>
          <Check src={check} alt="check" />
        </Div>
        <Divs>
          <Paragraphs>
            Your Phone Number has been Verified Successfully
          </Paragraphs>
        </Divs>
        <Link to="/">
          <Button text=" Continue " />
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Card>
    </>
  );
}
