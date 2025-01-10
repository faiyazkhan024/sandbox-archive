import React from "react";

import ReactEmoji from "react-emoji";

import currentTime from "../../../utils/currentTime";

import classes from "./Message.module.css";

const Message = ({ message: { text, user }, name }) => {
  const trimmedName = name.trim().toLowerCase();

  let pColor;
  let bgColor;
  let alignment;
  let senderName;
  let none;

  switch (user) {
    case trimmedName:
      pColor = "colorWhite";
      bgColor = "backgroundPrimary";
      alignment = "alignEnd";
      senderName = trimmedName;
      break;
    case "Bot":
      pColor = `${classes.alertText}`;
      alignment = "alignCenter";
      none = "displayNone";
      break;
    default:
      pColor = "colorDark";
      bgColor = "backgroundLight";
      alignment = "alignStart";
      senderName = user;
  }

  return (
    <div className={`${classes.messageContainer} ${alignment}`}>
      <p className={`${classes.sentText}  ${none}`}>{senderName}</p>
      <div className={`${classes.messageBox} ${bgColor}`}>
        <p className={`${classes.messageText} ${pColor}`}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className={`${classes.sentText} ${none}`}>{currentTime()}</p>
    </div>
  );
};

export default Message;
