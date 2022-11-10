import Logo from "./Logo";
import Button from "./Button";
import Text from "./Text";
import Navbar from "./Navbar";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillWarning,
} from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { getCountries } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import axios from "axios";
import "./SingUp.css";

function SingUp() {
  const [form, setForm] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [mobile, setmobile] = useState("");
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://talents-valley.herokuapp.com/api/user/signup",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,

          password: form.password,
          email: form.email,
          country: form.country,
          firstName: form.firstName,
          lastName: form.lastName,
          mobile: "+" + mobile,
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
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const validate = () => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (regex.test(form.password)) {
      setError(
        <p className="correct" style={{ color: "#2fc505" }}>
          <BsFillCheckCircleFill style={{ color: "#2fc505" }} />
          Nice work. This is an excellent password
        </p>
      );
    } else {
      setError(
        <p className="error">
          <AiFillWarning />
          Your password is weak
        </p>
      );
    }
  };

  return (
    <nav className="SingUp">
      <Logo />
      {/* <Link to="*"> */}
      <form onSubmit={handleSubmit}>
        <h3>Create Your Account</h3>
        <div className="fields">
          <div>
            <label className="field">First Name</label>
            <input
              className="inputs"
              type="text"
              placeholder="Enter first name "
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              value={form.firstName}
            />
          </div>
          <div>
            <label className="field">Last Name</label>
            <input
              className="inputs"
              type="text"
              placeholder="Enter first name "
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              value={form.lastName}
            />
          </div>
        </div>

        <label className="field">Email</label>
        <input
          className="input"
          type="text"
          name="email"
          placeholder="email@gmail.com"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />

        <label className="field">Password</label>
        <div className="input-text">
          <input
            className="input"
            type={passwordType}
            name="password"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              validate();
            }}
            value={form.password}
          />
          <span className="btn" onClick={togglePassword}>
            {passwordType === "password" ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
            )}
          </span>
        </div>
        {error}

        <label className="field" htmlFor="number">
          Phone Number
        </label>
        <PhoneInput
          onChange={setmobile}
          value={mobile}
          containerStyle={{ margin: "10px 10px 25px 0" }}
          dropdownStyle={{ height: "100px", width: "500px" }}
          country={"ps"}
          inputStyle={{
            backgroundColor: "#ffff",
            fontSize: "16px",
            color: "#707070",
            background: " #FFFFFF 0% 0% no-repeat padding-box",
            borderRadius: 7,
            paddingLeft: 70,
            marginBottom: 20,
            marginTop: 20,
          }}
          buttonStyle={{
            background: " #FFFFFF 0% 0% no-repeat padding-box",
            paddingRight: 10,
            paddingLeft: 10,
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
            height: 60,
          }}
        />

        <label className="field">Country</label>
        <select
          className="input"
          value={form.country}
          onChange={(e) =>
            setForm({ ...form, country: e.target.value || undefined })
          }
        >
          <option value="" className="option">
            {en[""]}
          </option>
          {getCountries().map((country) => (
            <option key={en[country]} value={en[country]}>
              {en[country]}
            </option>
          ))}
        </select>
        <Button text="Sign Up" link="" />

        <p style={{ color: "#EE404C", fontSize: "18px" }}>{errMsg}</p>
        <Text
          className="link"
          Sentence="Already have an account?"
          text="Sign In"
          link="/"
        />
      </form>
      <Navbar />

      {/* </Link> */}
    </nav>
  );
}
export default SingUp;
