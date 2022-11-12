import Card from "./Card/Card";
import Logo from "./Logo";
import { Arrow } from "./Card/CardStyle";
import Button from "./Button";
import InputField from "./Input";
import { useState } from "react";
import { createSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Label, Paragraph, Paragraph2 } from "./Card/CardStyle";

export default function Forgot() {
  const [inputValue, setInputValue] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  // const openprofile = (id) => {
  //   navigate({
  //     pathname: "/SendCode",
  //     search: createSearchParams({
  //       id: "635c1e38699f18f7f97b89e0",
  //     }).toString(),
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("mm");
      const response = await axios.post(
        "https://talents-valley.herokuapp.com/api/user/password/forgot",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          email: inputValue,
        }
      );

      console.log(JSON.stringify(response?.data));
    } catch (err) {
      console.log("erro", err);

      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status >= 400 && err.response?.status < 500) {
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg("Registration Failed");
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
      <Paragraph>Forgot Password?</Paragraph>
      <Paragraph2>
        We'll send a code to your email to reset your password
      </Paragraph2>
      <Label>Email</Label>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="email@gmail.com"
          onChange={setInputValue}
          value={inputValue}
          name="email"
        />
        <Button text="Send Code" onClick={()=>navigate('/SendCode')} />
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
      </form>
    </Card>
  );
}
