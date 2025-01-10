import React, { useState } from "react";

import { Helmet } from "react-helmet";

import AuthArt from "../../components/Auth/AuthArt/AuthArt";
import AuthForm from "../../components/Auth/AuthForm/AuthForm";

import classes from "./Auth.module.css";

const Auth = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <Helmet>
        <title>ReactChat | Auth</title>
      </Helmet>
      <main className={classes.Main}>
        <div className={classes.Auth}>
          <AuthArt />
          <AuthForm
            name={name}
            setName={setName}
            room={room}
            setRoom={setRoom}
          />
        </div>
      </main>
    </>
  );
};

export default Auth;
