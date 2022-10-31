import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Text from "./Text";
import Navbar from "./Navbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import "./Form.css";
export default function Form() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://talents-valley.herokuapp.com/api/user/login",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          email: email,
          password: password,
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
        setErrMsg("Login Failed");
      }
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <nav className="form">
      <Logo />
      {/* <Link to="/"> */}

      <form onSubmit={handleSubmit}>
        <h3>Login to Your Account</h3>

        <label className="field">Email</label>
        <input
          className="input"
          type="text"
          name="email"
          placeholder="email@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* <Test/> */}
        <label className="field">Password</label>
        <div className="input-text">
          <input
            type={passwordType}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span className="btn" onClick={togglePassword}>
            {passwordType === "password" ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
            )}
          </span>
        </div>
        <h4>Forgot Password?</h4>

        <Button text="Sign In" />
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>

        <Text Sentence="Don't have an account?" text="Sign up" />
      </form>
      <Navbar />
      {/* </Link> */}
    </nav>
  );
}
