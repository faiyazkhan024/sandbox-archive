import React from "react";

import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = ({ path, onClick, children, disabled }) => {
  return (
    <Link to={path} onClick={(event) => onClick(event)}>
      <button disabled={disabled} className={classes.Button} type="submit">
        {children}
      </button>
    </Link>
  );
};

export default Button;
