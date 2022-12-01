import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  userData: "",
  isLoggedIn: false,
  login: (token) => {},
  user: (user) => {},
});

export const AuthProvider = (props) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  const [token, setToken] = useState(storedToken);
  const [userData, setUserData] = useState(storedUser);
  console.log(storedToken);
  console.log(userData);
  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const userHandler = (userData) => {
    setUserData(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const contextValue = {
    userData: userData,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    user: userHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
