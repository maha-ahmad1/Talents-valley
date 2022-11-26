import Navbar from "../../components/Nav/Navbar";
import Card from "./Card/Card";
import Text from "./Text";
import Button from "./Button";
import {
  Title,
  Divemail,
  Paragraph2,
  SendInput,
  SendInput1,
  Resend,
  SendInput2,
} from "./Card/CardStyle";
import Email from "../../assets/images/email (2).png";

export default function VerificationEmail() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>Email Verification</Title>
        <Divemail>
          <img src={Email} alt="Email" />
        </Divemail>
        <Paragraph2>
          We have sent you a verification code to your email ****78@gmail.com
        </Paragraph2>
        <form>
          <SendInput>
            <SendInput1>
              <Resend />
              <Resend />
              <Resend />
            </SendInput1>
            <SendInput2>
              <Resend />
              <Resend />
              <Resend />
            </SendInput2>
          </SendInput>
          <Button text="Continue" />
          <Text
            className="link"
            Sentence="Didn't get the code?"
            text="Resend"
            link="/SignUp"
          />
        </form>
      </Card>
    </>
  );
}
