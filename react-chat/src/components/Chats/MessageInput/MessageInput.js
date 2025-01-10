import React from "react";

import { IoSend, IoAttach } from "react-icons/io5";

import Input from "../../utilities/Input/Input";
import IconButton from "../../utilities/IconButton/IconButton";

import classes from "./MessageInput.module.css";

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className={classes.Form}>
    <IconButton className={classes.IconButton} Icon={IoAttach} />

    <Input
      className={classes.Input}
      type="text"
      placeholder="Write a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
    />
    <IconButton
      className={classes.IconButton}
      Icon={IoSend}
      onClick={(e) => sendMessage(e)}
    />
  </form>
);

export default MessageInput;
