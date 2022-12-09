import Navbar from "../../components/Nav/Navbar";
import Card from "./Card/Card";
import { Title, Verificationh1, Buttonstyle, Divp } from "./Card/CardStyle";
import VerificationStyle from "./VerificationStyle";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Verification() {
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  console.log(authCtx.userData.verifiedEmail);
  console.log(authCtx.userData.verifiedMobile);

  const verifiedEmail = authCtx.userData.verifiedEmail;
  const verifiedMobile = authCtx.userData.verifiedMobile;
  const valueEmail = authCtx.userData.email;
  const valueMobile = authCtx.userData.mobile;

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(
      "https://talents-valley-backend.herokuapp.com/api/user/send-code-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode < 400) {
          navigate("/VerificationEmail");
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
  const handlePhone = async (e) => {
    e.preventDefault();
    fetch(
      "https://talents-valley-backend.herokuapp.com/api/user/send-code-mobile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode < 400) {
          navigate("/VerificationPhone");
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
        <Title>Verification</Title>
        <Verificationh1>
          To use our services, We need to verify your account
        </Verificationh1>
        <form onSubmit={handleSubmit}>
          <VerificationStyle
            texth1="Email Address"
            value={valueEmail}
            textp="mail@email.com "
            textspan="(not verified)"
            button="Verify"
            verified={verifiedEmail}
          />
        </form>
        <form onSubmit={handlePhone}>
          <VerificationStyle
            texth1="Phone Number"
            textp="+972 ******966 "
            textspan="(not verified)"
            button="Verify"
            verified={verifiedMobile}
            value={valueMobile}
          />
        </form>
        <Divp>
          <p>You can complete the 2 following tasks later</p>
        </Divp>
        <Link to="/VerificationId">
          <VerificationStyle
            texth1="ID Verification"
            textp="Identity card - Driver license - Passport "
            button="Verify"
          />
        </Link>

        <VerificationStyle
          texth1="Address Verification"
          textp="Phone, Electricity, Water Bill - Bank statement "
          button="Verify"
        />
        <Buttonstyle>Continue</Buttonstyle>
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
      </Card>
    </>
  );
}
