import React from "react";

import "./Input.css";

const Input = ({ formik, style, ...props }) => {
  const error = formik.touched[props.name] && formik.errors[props.name];
  return (
    <>
      <input
        {...props}
        style={{ ...style, background: error && "rgba(255,0,0,0.4)" }}
      />
      {error && <div className="error">{formik.errors[props.name]}</div>}
    </>
  );
};

export default Input;
