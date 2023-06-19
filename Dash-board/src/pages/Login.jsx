import React from "react";
import "../styles/login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [path, setPath] = useState("/");
  const [massageWarning, setMassageWarning] = useState({
    email: "",
    password: "",
  });
  function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    const email = event.target.value;

    if (email === "") {
      setMassageWarning({ ...massageWarning, email: "" });
    } else if (!patternEmail.test(email)) {
      setMassageWarning({
        ...massageWarning,
        email: "البريد لالكتروني غير صحيح",
      });
    } else {
      setMassageWarning({ ...massageWarning, email: "" });

      setUser({ ...user, email: email });
    }
  }

  function handlePassword(event) {
    const patternPassword =
      /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const password = event.target.value;

    if (password === "") {
      setMassageWarning({ ...massageWarning, password: "" });
    } else if (!patternPassword.test(password)) {
      setMassageWarning({ ...massageWarning, password: "خطأ في كلمة المرور" });
    } else {
      setMassageWarning({ ...massageWarning, password: "" });

      setUser({ ...user, password: password });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    await axios
      .post(`http://localhost:5000/adminVerify`, {
        email: email,
        password: password,
      })
      .then((res) => {
        event.target.reset();
        localStorage.setItem("token", res.data.token);
        // setPath();
        navigate("/dashboard");
        console.log(res);
      })
      .catch((err) => {
        setMassageWarning({
          ...massageWarning,
          submit: "Password or email is incorrect.",
        });
        console.error(err);
      });
  }

  return (
    <>
      <>
        <div className="login_admin">
          <div className="background">
            <div className="shape" />
            <div className="shape" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Login Here</h3>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Email or Phone"
              id="email"
              onChange={handleEmail}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePassword}
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </>
    </>
  );
};

export default Login;
