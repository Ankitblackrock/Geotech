import React from "react";

function Button(props) {
  const { ClassName, onClickfn, children } = props;
  return (
    <div className={ClassName} onClick={onClickfn}>
      {children}
    </div>
  );
}

export default Button;
