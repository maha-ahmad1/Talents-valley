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
import smartphone from "../../assets/images/smartphone.png";

export default function VerificationPhone() {
  return (
    <>
      <Navbar />
      <Card>
        <Title>Phone Verification</Title>
        <Divemail>
          <img src={smartphone} alt="Email" />
        </Divemail>
        <Paragraph2>
          We have sent you a verification code to your phone
          <br /> number ********789
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
