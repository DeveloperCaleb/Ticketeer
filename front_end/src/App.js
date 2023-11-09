import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Dashboard/Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import TicketDetails from "./Dashboard/Tickets/TicketDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ticket/:ticketId" element={<TicketDetails />} />
    </Routes>
  );
}

export default App;
