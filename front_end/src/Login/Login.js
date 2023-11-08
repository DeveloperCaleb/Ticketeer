import React, { useState } from "react";
import { users } from "../Test DB/users";
import "./Login.css";
import { Navigate, useNavigate, Link } from "react-router-dom";

function Login(props) {
  console.log(users);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputTarget = e.target;

    if (inputTarget.id === "email") {
      setEmail(inputTarget.value);
    } else setPass(inputTarget.value);

    console.log(email, pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    navigate("/home");
  };

  return (
    <div className="Login">
      {" "}
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@email.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button onSubmit={handleSubmit} type="submit">
            Login
          </button>
        </form>
        <div className="link-container">
          <Link to={"/register"} className="link">
            Don't have an account? Register here.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
