import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({ text='', link, type ='submit' }) {
  return (
    <>
      {/* <Link  to={link}> */}
      <button className="button" type={type} >
        {text}
      </button>
      {/* </Link> */}
    </>
  );
}
