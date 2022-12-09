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
import AuthContext from "../context/AuthProvider";
import Email from "../../assets/images/email (2).png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

export default function VerificationEmail() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [verificationCode, setVerificationCode] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });
  const array = [
    verificationCode.input1,
    verificationCode.input2,
    verificationCode.input3,
    verificationCode.input4,
    verificationCode.input5,
    verificationCode.input6,
  ];
  let text = array.join("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(
      "https://talents-valley-backend.herokuapp.com/api/user/verify/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`,
        },
        body: JSON.stringify({
          verificationCode: text,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode < 400) {
          navigate("/Successverify");
          console.log(response);
        } else if (!response) {
          setErrMsg("No Server Response");
          console.log(response);
        } else if (response?.statusCode >= 400 && response?.statusCode < 500) {
          setErrMsg(response.message);
          console.log(response);
        } else {
          setErrMsg(" Failed");
          console.log(response);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

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
        <form onSubmit={handleSubmit}>
          <SendInput>
            <SendInput1>
              <Resend
                value={verificationCode.input1}
                onChange={(e) =>
                  setVerificationCode({
                    ...verificationCode,
                    input1: e.target.value,
                  })
                }
                maxLength="1"
              />
              <Resend
                value={verificationCode.input2}
                onChange={(e) =>
                  setVerificationCode({
                    ...verificationCode,
                    input2: e.target.value,
                  })
                }
                maxLength="1"
              />
              <Resend
                value={verificationCode.input3}
                onChange={(e) =>
                  setVerificationCode({
                    ...verificationCode,
                    input3: e.target.value,
                  })
                }
                maxLength="1"
              />
            </SendInput1>
            <SendInput2>
              <Resend
                value={verificationCode.input4}
                onChange={(e) =>
                  setVerificationCode({
                    ...verificationCode,
                    input4: e.target.value,
                  })
                }
                maxLength="1"
              />
              <Resend
                value={verificationCode.input5}
                onChange={(e) =>
                  setVerificationCode({
                    ...verificationCode,
                    input5: e.target.value,
                  })
                }
                maxLength="1"
              />
              <Resend
                value={verificationCode.input6}
                onChange={(e) =>
                  setVerificationCode({
                    ...verificationCode,
                    input6: e.target.value,
                  })
                }
                maxLength="1"
              />
            </SendInput2>
          </SendInput>
          <Button text="Continue" />
          <Text
            className="link"
            Sentence="Didn't get the code?"
            text="Resend"
          />
          <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
        </form>
      </Card>
    </>
  );
}
