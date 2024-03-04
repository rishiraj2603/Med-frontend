import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { BACKEND_URL } from "../../constants/url";
import Navbar from "../TopBar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = passwordRef.current.value;

    try {
      const res = await axios.post(`${BACKEND_URL}/login`, {
        email,
        password,
        username,
      });
      const data = res.data;
      console.log("🚀 ~ submitHandler ~ data:", data);
    } catch (error) {
      console.log(error.response.data);
    }
    navigate("/");
  }
  return (
    <div>
      <div class={style.container}>
        <div class={style.top}></div>
        <div class={style.bottom}></div>
        <div class={style.center}>
          <h2>Please Sign In</h2>
          <form onSubmit={submitHandler}>
            <input type="email" placeholder="Email" id="email" ref={emailRef} />
            <input
              placeholder="Username"
              id="username"
              ref={usernameRef}
              type="text"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              ref={passwordRef}
            />
            <button className={`${style.submitBtn} rounded-lg`} type="submit">
              Submit
            </button>
          </form>
          <h2>&nbsp;</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
