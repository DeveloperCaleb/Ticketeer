import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (e) => {
    const inputTarget = e.target;

    if (inputTarget.id === "email") {
      setEmail(inputTarget.value);
    } else setPass(inputTarget.value);

    console.log(email, pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Already have an account? Login here.
      </button>
    </>
  );
}

export default Login;
