import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const saveInput = (e) => {
    const { name, value } = e.target;
    if (name === "full_name") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm_password") {
      setConfirmPassword(value);
    }
  };
  const signUp = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://simple-e-commerce-backend.herokuapp.com/api/v1/auth/register",
        {
          full_name: fullName,
          email: email,
          password: password,
          confirmation_password: confirmPassword,
        }
      )
      .then(function (response) {
        setResponseMessage(response.data.message);
      });
  };

  return (
    <>
    <h1>{responseMessage}</h1>
      <form method="POST">
        <h1>Please fill the form.</h1>
        <input 
        className="d-block-input"
          type="text"
          name="full_name"
          id="full_name"
          placeholder="Full Name"
          value={fullName}
          onChange={saveInput}
        />
        <input 
        className="d-block-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={saveInput}
        />
        <input 
        className="d-block-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={saveInput}
        />
        <input 
        className="d-block-input"
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={saveInput}
        />
        <button type="submit" onClick={signUp} className="d-block-input">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Register;
