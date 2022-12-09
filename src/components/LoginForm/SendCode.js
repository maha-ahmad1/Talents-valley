import Card from "./Card/Card";
import Logo from "./Logo";
import Button from "./Button";
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  Paragraph,
  Paragraph2,
  SendInput,
  SendInput1,
  SendInput2,
  Resend,
  Arrow,
} from "./Card/CardStyle";

import axios from "axios";
import Text from "./Text";

export default function SendCode() {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

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

    try {
      console.log("mm");
      const response = await axios.post(
        "https://talents-valley-backend.herokuapp.com/api/user/password/verify-code",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          verificationCode: text,
          _id: id,
        }
      );

      console.log(response?.data);
      navigate("/NewPassword", {
        state: { name: response?.data.data.recoverToken },
      });
      console.log(response?.data.data.recoverToken);
    } catch (err) {
      console.log("erro", err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status >= 400 && err.response?.status < 500) {
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg(" Failed");
      }
    }
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
            {console.log(verificationCode.input1)}
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
          link="/SignUp"
        />

        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
      </form>
    </Card>
  );
}
