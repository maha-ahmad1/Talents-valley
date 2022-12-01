import { useState, useContext } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Text from "./Text";
import Navbar from "./Navbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import "./Form.css";
export default function Form() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [errMsg, setErrMsg] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios
        .post("https://talents-valley.herokuapp.com/api/user/login", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          email: email,
          password: password,
        })
        .then((response) => {
          authCtx.login(response?.data?.data?.accessToken);
          authCtx.user(response?.data?.data?.user);
          console.log(response?.data);
        });
      setEmail("");
      setPassword("");
      setIsLoading(false);
      navigate("/Verification");
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

        <Text className="forgot" text="Forgot Password?" link="/Forgot" />

        <Button text="Sign In" link="/" />
        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>

        <Text
          className="link"
          Sentence="Don't have an account?"
          text="Sign up"
          link="/SignUp"
        />
      </form>
      <Navbar />
      {/* </Link> */}
    </nav>
  );
}
