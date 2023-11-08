import React from "react";
import TopNavBar from "../UI_Utils/TopNavBar";
import "./Home.css";
import TicketList from "./Tickets/TicketList";

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
