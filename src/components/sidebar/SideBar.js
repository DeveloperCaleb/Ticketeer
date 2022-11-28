import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ticketeer</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <ConfirmationNumberIcon className="icon" />
            <span>Tickets</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <p className="user">Caleb Jordan</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Sign Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
