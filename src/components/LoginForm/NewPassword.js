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

  const navigate = useNavigate();

  const location = useLocation();
  const recovertoken = location.state.name;
  console.log(recovertoken);

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      console.log("mm");
      const response = await axios.post(
        "https://talents-valley.herokuapp.com/api/user/password/recover",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          password: passwordVerify,
          recoverToken: recovertoken,
        }
      );

      console.log(response?.data);
      navigate("/Reset");
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
      <Pcreate>Create New Password</Pcreate>
      <form onSubmit={handleChange}>
        <Label>New Password</Label>
        <Password
          type={"password"}
          onChange={setPassword}
          value={password}
          name={"password"}
        />
        {console.log(password)}
        <Label>Re-Enter Password</Label>
        <Password
          type={"password"}
          onChange={setPasswordVerify}
          value={passwordVerify}
          name={"repassword"}
        />
        {console.log(passwordVerify)}

        <Button text="Continue" link="/Reset" />
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
      </form>
    </Card>
  );
}
