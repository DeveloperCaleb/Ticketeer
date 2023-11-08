import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router";

function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [validation, setValidation] = useState(false);

  const handleChange = (e) => {
    const inputTarget = e.target;

    if (inputTarget.id === "email") {
      setEmail(inputTarget.value);
    } else setPass(inputTarget.value);

    console.log(email, pass);
  };

  //link to home after submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    if (email === "" || pass === "") {
      setValidation(!validation);
      return;
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="Login">
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
          {validation ? (
            <div className="warning">Invalid email or password.</div>
          ) : (
            <div />
          )}
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
