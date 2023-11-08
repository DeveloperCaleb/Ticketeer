import React, { useState } from "react";
import "./Register.css";
import { Navigate, useNavigate, Link } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const defaultForm = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  };

  const [form, setForm] = useState([defaultForm]);

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = () => {
    console.log("authenticating");
    console.log("authenticated");
    props.onFormSwitch("login");
  };

  return (
    <div className="Register">
      <div className="register-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@email.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            value={form.pass}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="password">First Name:</label>
          <input
            value={form.firstName}
            onChange={handleChange}
            type="firstName"
            placeholder="First Name"
            id="firstName"
            name="firstName"
          />
          <label htmlFor="password">Last Name:</label>
          <input
            value={form.lastName}
            onChange={handleChange}
            type="lastName"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
          />
          <label htmlFor="password">Phone Number:</label>
          <input
            value={form.phone}
            onChange={handleChange}
            type="phone"
            placeholder="12345678901"
            id="phone"
            name="phone"
          />
          <button onSubmit={handleSubmit} type="submit">
            Register
          </button>
        </form>
        <div className="link-container">
          <Link to={"/"} className="link">
            Already have an account? Login here.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
