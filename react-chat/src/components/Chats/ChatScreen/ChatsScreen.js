import React from "react";

import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";

import classes from "./ChatsScreen.module.css";

const ChatScreen = ({
  name,
  room,
  messages,
  sendMessage,
  message,
  setMessage,
}) => (
  <div className={classes.Container}>
    <div className={classes.RoomName}>
      <h1>{room}</h1>
    </div>
    <div
      className={classes.ChatScreen}
      followButtonClassName={classes.ScrollToBottom}
    >
      {messages.map((message, i) => (
        <Message message={message} name={name} key={i} />
      ))}
    </div>
    <MessageInput
      setMessage={setMessage}
      sendMessage={sendMessage}
      message={message}
    />
  </div>
);

export default ChatScreen;
