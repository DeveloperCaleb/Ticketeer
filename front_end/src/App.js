import React, { useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Login/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Dashboard/Home";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className="App">
      {authentication === true ? (
        <Home />
      ) : currentForm === "login" ? (
        <Login
          onFormSwitch={toggleForm}
          setAuthentication={setAuthentication}
        />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>

    /*  <div className="App">
      {currentForm === "login" && authentication === false ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>*/
  );
}

export default App;
