import React, { useState } from "react";
import ResultComponent from "../ResultComponent/ResultComponent";
import KeyPadComponent from "../KeyPadComponent/KeyPadComponent";
import style from "./style.module.css";

function Calculator() {
  const [result, setResult] = useState("");

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult((prevResult) => prevResult + button);
    }
  };

  const calculate = () => {
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }
    try {
      setResult((eval(checkResult) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  return (
    <div>
      <div className={style.calculator_body}>
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
}

export default Calculator;
