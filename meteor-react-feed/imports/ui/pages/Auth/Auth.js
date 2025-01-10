import React, { useState } from "react";

import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { useFormik } from "formik";

import AuthForm from "../../components/Auth/AuthForm/AuthForm";
import authFormValidator from "../../validators/authForm";

import "./Auth.css";

const Auth = () => {
  const [signup, setSignup] = useState(false);
  const [isError, setIsError] = useState(false);

  const switchAuth = () => setSignup((pre) => !pre);

  const initialValues = {
    email: "",
    password: "",
    confirm: "",
  };

  const errorHandler = (error) => setIsError(error);

  const authSubmitHandler = (values) => {
    alert("hi");
    if (signup)
      return Accounts.createUser(
        {
          email: values.email,
          password: values.password,
        },
        errorHandler
      );

    if (!signup)
      return Meteor.loginWithPassword(
        values.email,
        values.password,
        errorHandler
      );
  };

  const formik = useFormik({
    initialValues,
    validationSchema: authFormValidator,
    onSubmit: authSubmitHandler,
  });

  return (
    <div className="authFormOuterContainer">
      <div className="authFormInnerContainer">
        <AuthForm
          isError={isError}
          formik={formik}
          isSignup={signup}
          switchAuth={switchAuth}
        />
      </div>
    </div>
  );
};

export default Auth;
