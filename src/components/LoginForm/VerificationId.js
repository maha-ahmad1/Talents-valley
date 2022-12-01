import Navbar from "../../components/Nav/Navbar";
import Card from "./Card/Card";
import Button from "./Button";
import { Title, Divemail, Paragraph2 } from "./Card/CardStyle";
import Idcard from "../../assets/images/Idcard.png";

export default function VerificationId() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>ID Verification</Title>
        <Divemail>
          <img src={Idcard} alt="Email" />
        </Divemail>
        <Paragraph2>
          Upload Document that Proof your Identity such as: Identity
          Card,Passport, Driver License
        </Paragraph2>
        <Button text="Continue" />
      </Card>
    </>
  );
}
