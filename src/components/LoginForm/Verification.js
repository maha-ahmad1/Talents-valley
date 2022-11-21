import Navbar from "../../components/Nav/Navbar";
import Button from "./Button";
import Card from "./Card/Card";
import { Title, Verificationh1, Buttonstyle, Divp } from "./Card/CardStyle";
import VerificationStyle from "./VerificationStyle";

export default function Verification() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>Verification</Title>
        <Verificationh1>
          To use our services, We need to verify your account
        </Verificationh1>
        <VerificationStyle
          texth1="Email Address"
          textp="mail@email.com"
          textspan="(not verified)"
          button="Verify"
        />
        <VerificationStyle
          texth1="Phone Number"
          textp="+972 ******966 "
          textspan="(not verified)"
          button="Verify"
        />
        <Divp>
          <p>You can complete the 2 following tasks later</p>
        </Divp>
        <VerificationStyle
          texth1="ID Verification"
          textp="Identity card - Driver license - Passport "
          button="Verify"
        />
        <VerificationStyle
          texth1="Address Verification"
          textp="Phone, Electricity, Water Bill - Bank statement "
          button="Verify"
        />
        <Buttonstyle>Continue</Buttonstyle>
      </Card>
    </>
  );
}
