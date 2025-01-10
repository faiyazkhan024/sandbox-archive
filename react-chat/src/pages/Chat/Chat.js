import React, { useState, useEffect } from "react";

import queryString from "query-string";
import io from "socket.io-client";
import { Helmet } from "react-helmet";

import ChatGroups from "../../components/Chats/ChatGroups/ChatGroups";
import ChatScreen from "../../components/Chats/ChatScreen/ChatsScreen";
import ChatMembers from "../../components/Chats/ChatMembers/ChatMembers";

import classes from "./Chat.module.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:5000/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    socket.on("roomData", ({ room, users }) => {
      setUsers(users);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((pm) => [...pm, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ReactChat | Room {room}</title>
      </Helmet>

      <div className={classes.Container}>
        <ChatGroups />
        <hr />
        <ChatScreen
          name={name}
          room={room}
          message={message}
          messages={messages}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <hr />
        <ChatMembers users={users} />
      </div>
    </>
  );
};

export default Chat;
