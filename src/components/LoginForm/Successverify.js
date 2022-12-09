import Card from "./Card/Card";
import Navbar from "../../components/Nav/Navbar";
import { Check, Div, Paragraphs, Title, Divs } from "./Card/CardStyle";
import Button from "./Button";
import { Link } from "react-router-dom";

import check from "../../assets/images/check.png";

export default function Successverify() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>Email Verification</Title>
        <Div>
          <Check src={check} alt="check" />
        </Div>
        <Divs>
          <Paragraphs> Your Email has been Verified Successfully</Paragraphs>
        </Divs>
        <Link to="/Verification">
          <Button text=" Continue " />
        </Link>
       
      </Card>
    </>
  );
}
