import { Link } from "react-router-dom";
import './Text.css';
export default function Text({text,Sentence,link,className}) {
  return (
    <>
      <div className='text'>
      {Sentence}{" "}
        <Link className={className} to={link}>
          {text}
        </Link>
      </div>
    </>
  );
}
