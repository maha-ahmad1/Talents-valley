import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Text from "./Text";
import Navbar from "./Navbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Form.css";
import { Link } from "react-router-dom";
import Test from "./Test";
export default function Form() {
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  // const [touched, setTouched] = useState(false);

  // const isValid = email !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  console.log(password);
  // console.log(email);
  return (
    <nav className="form">
      <Logo />
      <Link to="/">
        <form onSubmit={handleSubmit}>
          <h3>Login to Your Account</h3>

          {/* <label className="field">Email</label>
          <input
            className={touched ? (isValid ? "form-control" : "error-control") : null}
            value={email}
            type="text"
            name="email"
            placeholder="email@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            
          /> */}
          <Test/>
          <label className="field">Password</label>
          <div className="input-text">
            <input
              type={passwordType}
              name="password"
              onChange={(e) =>setPassword(e.target.value) }
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
          <Text Sentence="Don't have an account?" text="Sign up" />
        </form>
        <Navbar />
      </Link>
    </nav>
  );
}
