import React from "react";

import "./AuthFormHeader.css";

const AuthFormHeader = ({ isSignup, switchAuth, isError }) => {
  return (
    <div className="authFormHeader">
      <h1>{isSignup ? "Create Account" : "Welcome to MRF"}</h1>
      <p>
        {isSignup ? "Already have an Account?" : "Don't have an Account?"}{" "}
        <a onClick={switchAuth}>{isSignup ? "Login" : "Signup"}</a>
      </p>
      {isError && <p>{isError}</p>}
    </div>
  );
};

export default AuthFormHeader;
