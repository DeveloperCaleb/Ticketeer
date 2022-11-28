import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./home.scss";

function Home(props) {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">container</div>
    </div>
  );
}

export default Home;
