import React from "react";

import AuthFormHeader from "../AuthFormHeader/AuthFormHeader";
import Input from "../../utils/Input/Input";

import "./AuthForm.css";

const AuthForm = ({ formik, isSignup, switchAuth, isError }) => {
  return (
    <form onSubmit={formik.handleSubmit} className="authForm">
      <AuthFormHeader
        isError={isError}
        isSignup={isSignup}
        switchAuth={switchAuth}
      />

      <Input
        className="authInput"
        type="email"
        placeholder="Jon.doe@domain.com"
        name="email"
        formik={formik}
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Input
        className="authInput"
        type="password"
        placeholder="Password"
        name="password"
        formik={formik}
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      {isSignup && (
        <Input
          className="authInput"
          type="password"
          placeholder="Confirm Password"
          name="confirm"
          formik={formik}
          onChange={formik.handleChange}
          value={formik.values.confirmPass}
        />
      )}

      <button type="submit" className="authBtn">
        {isSignup ? "Signup" : "Log In"}
      </button>
    </form>
  );
};

export default AuthForm;
