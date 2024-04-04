import React, { useEffect, useMemo, useState } from "react";
import Button from "../../component/Button/Button";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import Layout1 from "../../component/Layout1/Layout1";
import Layout2 from "../../component/Layout2/Layout2";
import Calculator2 from "../../component/Calculator/Calculator";
import Calculator from "../../component/Calculator/Calculator";

const Home = () => {
  const [toggleWidth, setToggleWidth] = useState(false);
  const navigate = useNavigate();
  const [array, setArray] = useState(new Array(5).fill(null));
  const HandleLogOut = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  // const newArray = useMemo(() => {
  //   if (toggleWidth) {
  //     // setArray((prevArray) => prevArray.slice(0, 3));
  //     return new Array(3).fill(null);
  //   } else {
  //     return new Array(5).fill(null);
  //   }
  // }, [toggleWidth]);

  console.log("Array", array);
  return (
    <div>
      <div className={style.logoutPage}>
        <h1 style={{ marginLeft: "7px" }}>Home Page</h1>
        <Button ClassName={style.logoutBtn} onClickfn={HandleLogOut}>
          Logout
        </Button>
      </div>
      <div className={style.layoutsetup}>
        <Layout1
          toggleWidth={toggleWidth}
          setToggleWidth={setToggleWidth}
          setArray={setArray}
        />
        <div className={style.boxContainer}>
          {" "}
          {array.map((item, key) => (
            <span className={style.box} key={key}>
              {item}
            </span>
          ))}
          <Calculator />
        </div>

        <Layout2 toggleWidth={toggleWidth} setToggleWidth={setToggleWidth} />
      </div>
    </div>
  );
};

export default Home;
