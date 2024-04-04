import React from "react";
import style from "./style.module.css";
function ResultComponent({ result }) {
  return (
    <div className={style.result}>
      <p>{result}</p>
    </div>
  );
}

export default ResultComponent;
