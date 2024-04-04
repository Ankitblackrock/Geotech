import React, { useEffect, useState } from "react";
import Button from "../../component/Button/Button";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  //     setIsLoggedIn(isAuthenticated);
  //   }, []);

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    navigate("/");
  };

  //   if (isLoggedIn) {
  //     navigate("/home");
  //     return null;
  //   } else {
  //     navigate("/");
  //   }
  return (
    <>
      {" "}
      <div className={style.loginPage}>
        <h1 style={{ marginLeft: "7px" }}>Login Page</h1>
        <Button ClassName={style.loginBtn} onClickfn={handleLogin}>
          Login
        </Button>
      </div>
    </>
  );
}

export default Loginpage;
