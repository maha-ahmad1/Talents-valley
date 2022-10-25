import { Link } from "react-router-dom";
import './Text.css';
export default function Text({text,Sentence}) {
  return (
    <>
      <nav>
      {Sentence}{" "}
        <Link className="link" to="/SignUp">
          {text}
        </Link>
      </nav>
    </>
  );
}
