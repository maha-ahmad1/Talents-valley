import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logohome from "../../assets/images/logohome.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0.5px 6px #00000029;
  letter-spacing: 2px;
  font: normal normal 600 20px/27px Segoe UI;
  color: #151617;
  .container {
    display: flex;
  }
  .logo1 {
    //width: 96px;
    height: 72px;
  }
  .text {
    padding: 18px 0;
    font: normal normal 600 20px/27px Segoe UI;
    color: #000000;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <img className="logo1" src={logohome} alt="logo home" />
        <h1 className="text">TALENTS VALLEY</h1>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
