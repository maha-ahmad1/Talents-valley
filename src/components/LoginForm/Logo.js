import ReactLogo from "../../assets/images/logo.svg";
import "./Logo.css";

export default function Logo({ children }) {
  return (
    <div>
      {children}
      <div className="logo">
        <img src={ReactLogo} alt="logo" className="imge" />
      </div>
    </div>
  );
}
