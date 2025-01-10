import Chat from "../../Svg/Chat";
import Windows from "../../Svg/Windows";

import classes from "./AuthArt.module.css";

const AuthArt = () => {
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <Chat className={classes.Svg} />
        <Windows className={`${classes.Svg} z-index_-1`} />
      </div>
    </div>
  );
};

export default AuthArt;
