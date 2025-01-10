import React from "react";

import cnj from "classnames";
import Ripples from "react-ripples";

import classes from "./IconButton.module.css";

const IconButton = ({
  Icon,
  title,
  showTitle,
  onClick,
  className,
  titleStyle,
  iconStyle,
}) => {
  return (
    <Ripples
      className={cnj(className, classes.IconButton)}
      onClick={onClick}
      color="rgba(256,256,256,0.3)"
    >
      <div className={classes.Icon}>
        <Icon className={iconStyle} />
      </div>
      {showTitle && <p className={titleStyle}>{title}</p>}
    </Ripples>
  );
};

export default IconButton;
