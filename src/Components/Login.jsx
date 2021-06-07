import axios from "axios";
import React, { useState } from "react";
import '../Styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwtToken, setJwtToken] = useState("");

  const saveInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const logIn = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://simple-e-commerce-backend.herokuapp.com/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      )
      .then(function (response) {
        setJwtToken(response.data.data);
      });
  };

  return (
    <>
      <form method="POST">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="loginEmail"
          placeholder="email"
          onChange={saveInput}
          className="d-block-input"
        />
        <input
          type="password"
          name="password"
          id="loginPassword"
          placeholder="password"
          onChange={saveInput}
          className="d-block-input"
        />
        <button type="submit" onClick={logIn} className="d-block-input btn-login">
          Log in
        </button>
      </form>
    </>
  );
};

export default Login;
