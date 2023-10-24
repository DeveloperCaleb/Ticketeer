import React, { useState } from "react";

function Register(props) {
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

  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Don't have an account? Register here.
      </button>
    </>
  );
}

export default Register;
