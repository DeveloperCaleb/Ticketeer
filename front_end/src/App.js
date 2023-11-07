import React, { useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Login/Register";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Dashboard/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "./TopNavBar";

function App() {
  //Make dashboard first in the route
  //Nav to Login if authentication === false
  //create new useState hook to hold login status
  //If autenticated show dashboard
  //Else show login screen

  const [currentForm, setCurrentForm] = useState("login");
  const [authentication, setAuthentication] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  //use router to route to home page after login

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
