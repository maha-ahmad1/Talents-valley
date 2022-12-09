import Card from "./Card/Card";
import Logo from "./Logo";
import { Arrow } from "./Card/CardStyle";
import Button from "./Button";
import { useState } from "react";
import Password from "./Password";
import { Label, Pcreate } from "./Card/CardStyle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Forgot() {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errVerify, setErrVerify] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const recovertoken = location.state.name;
  console.log(recovertoken);

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      console.log("mm");
      const response = await axios.post(
        "https://talents-valley-backend.herokuapp.com/api/user/password/recover",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          password: passwordVerify,
          recoverToken: recovertoken,
        }
      );
      if (response?.statusCode < 400 && password.match(passwordVerify)) {
        navigate("/Reset");
        console.log(response?.data);
      }
    } catch (err) {
      console.log("erro", err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      }
      if (err.response?.status >= 400 && err.response?.status < 500) {
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg(" Failed");
      }
    }
    if (password !== passwordVerify) {
      setErrVerify("confirm password should be match with password");
    }
  };

  return (
    <Card>
      <Logo>
        <Link to="/">
          <Arrow />
        </Link>
      </Logo>
      <form onSubmit={handleChange}>
        <Pcreate>Create New Password</Pcreate>
        <Label>New Password</Label>
        <Password
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={"password"}
        />
        <Label>Re-Enter Password</Label>
        <Password
          type={"password"}
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
          name={"repassword"}
        />
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errVerify}</p>

        <Button text="Continue" />
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
      </form>
    </Card>
  );
}
