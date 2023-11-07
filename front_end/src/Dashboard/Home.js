import React from "react";
import TicketList from "./Tickets/TicketList";
import TopNavBar from "../TopNavBar";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <TopNavBar />
      <div className="Home">
        <TicketList />
      </div>
    </div>
  );
}

export default Home;
