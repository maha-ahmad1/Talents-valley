import Form from "./components/LoginForm/Form";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/LoginForm/SingUp";
import Forgot from "./components/LoginForm/Forgot";
import SendCode from "./components/LoginForm/SendCode";
import NewPassword from "./components/LoginForm/NewPassword";
import Reset from "./components/LoginForm/Reset";

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
      </Routes>
    </div>
  );
}

export default App;
