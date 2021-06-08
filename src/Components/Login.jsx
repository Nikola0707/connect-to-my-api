import axios from "axios";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { loginAction } from "../Redux/ActionsAndReducers/Login/login";

import "../Styles/Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

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
      .then(
        (response) => {
          console.log(response.data);
          let jwt = response.data.data;
          dispatch(loginAction(jwt));
          setLoggedIn(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  if (!loggedIn) {
    return (
      <>
        <form method="POST">
          <h1>Please fill the form.</h1>
          <input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Email"
            onChange={saveInput}
            className="d-block-input"
          />
          <input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Password"
            onChange={saveInput}
            className="d-block-input"
          />
          <button
            type="submit"
            onClick={logIn}
            className="d-block-input btn-login"
          >
            Log in
          </button>
        </form>
      </>
    );
  }

  return <h1>You are logged in</h1>;
};

export default Login;
