import Form from "./components/LoginForm/Form";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/LoginForm/SingUp";
import Forgot from "./components/LoginForm/Forgot";
import SendCode from "./components/LoginForm/SendCode";
import NewPassword from "./components/LoginForm/NewPassword";
import Reset from "./components/LoginForm/Reset";
import Verification from "./components/LoginForm/Verification";
import VerificationEmail from "./components/LoginForm/VerificationEmail";
import Successverify from "./components/LoginForm/Successverify";
import VerificationPhone from "./components/LoginForm/VerificationPhone";
import SuccessPhone from "./components/LoginForm/SuccessPhone";
import VerificationId from "./components/LoginForm/VerificationId";
import Verificationaddress from "./components/LoginForm/Verificationaddress";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Form />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/SendCode" element={<SendCode />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/VerificationEmail" element={<VerificationEmail />} />
        <Route path="/Successverify" element={<Successverify />} />
        <Route path="/VerificationPhone" element={<VerificationPhone />} />
        <Route path="/SuccessPhone" element={<SuccessPhone />} />
        <Route path="/VerificationId" element={<VerificationId />} />
        <Route path="/address" element={<Verificationaddress />} />
      </Routes>
    </div>
  );
}

export default App;
