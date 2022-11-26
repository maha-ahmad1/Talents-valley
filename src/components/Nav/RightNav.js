import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 18px 0 0;

  li {
    padding: 19px 20px;
    font: normal normal 600 18px/27px Segoe UI;
    color: #151617;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #a7bdfb;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
  .createstyle {
    color: #4375ff;
    width: 107px;
    height: 34px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #4375ff;
    border-radius: 23px;
    padding: 3px 23px;
    margin-top: 15px;
    font: normal normal 600 18px/27px Segoe UI;
    letter-spacing: 0px;
    color: #4375ff;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>Invoice</li>
      <li className="createstyle">Create</li>
    </Ul>
  );
};

export default RightNav;
