import React from "react";

import { chatPath } from "../../../constants/paths";

import Input from "../../utilities/Input/Input";
import Button from "../../utilities/Button/Button";

import classes from "./AuthForm.module.css";

const AuthForm = ({ name, setName, room, setRoom }) => {
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <h1 className={classes.Heading}>Join</h1>
        <br />

        <div>
          <Input
            placeholder="Username"
            onChange={(event) => setName(event.target.value)}
            showLabel
          />
          <Input
            placeholder="Room Name"
            onChange={(event) => setRoom(event.target.value)}
            showLabel
          />
        </div>

        <Button
          path={`${chatPath}?name=${name}&room=${room}`}
          disabled={name === "" || room === ""}
          onClick={(event) => (!name || !room) && event.preventDefault()}
        >
          Join Room
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
