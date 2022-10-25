import Logo from "./Logo";
import Button from "./Button";
import Text from "./Text";
import Navbar from "./Navbar";
import React, { useState } from "react";
// import Country from "./Country";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import "./SingUp.css";

// import { Link } from "react-router-dom";

function SingUp() {
  const [form, setForm] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  console.log(form);
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
  const validate = () => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (regex.test(password)) {
      setError(
        <p className="correct">
          <BsFillCheckCircleFill />
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
              className="input"
              type="text"
              placeholder="Enter first name "
              onChange={(e) => setForm(e.target.value)}
              value={form.firstName}
            />
          </div>
          <div>
            <label className="field">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Enter first name "
              onChange={(e) => setForm(e.target.value)}
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
          onChange={(e) => setForm(e.target.value)}
          value={form.email}
        />

        <label className="field">Password</label>
        <div className="input-text">
          <input
            className="input"
            type={passwordType}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              validate();
            }}
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
        <p>{error}</p>

        <label className="field" htmlFor="number">
          Phone Number
        </label>
        <PhoneInput
          onChange={setForm}
          value={form.phoneNumber}
          containerStyle={{ margin: "10px 10px 25px 0" }}
          dropdownStyle={{ height: "100px", width: "500px" }}
          country={"ps"}
          inputStyle={{
            backgroundColor: "#ffff",
            fontSize: "20px",
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
          }}
        />
        <label className="field">Country</label>
        <select
          className="Country"
          onChange={(e) => setForm(e.target.value)}
          value={form.country}
        >
          <option value="english">English(USA)</option>
          <option value="arabic">Arabic</option>
        </select>
        {/* <Country /> */}
        <Button text="Sign Up " />
        <Text Sentence="Already have an account?" text="Sign In" />
      </form>
      <Navbar />

      {/* </Link> */}
    </nav>
  );
}
export default SingUp;
