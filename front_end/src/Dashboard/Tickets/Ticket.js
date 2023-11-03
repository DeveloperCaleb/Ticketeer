import React from "react";
import Table from "react-bootstrap/Table";

import { users } from "../../Test DB/users";
import { tickets } from "../../Test DB/tickets";

function Ticket(props) {
  return tickets.map((ticket) => {
    return (
      <tr key={ticket.TicketID}>
        <td>{ticket.CreatedBy}</td>
        <td>{ticket.CreatedBy}</td>
        <td>{ticket.Title}</td>
        <td>{ticket.Description}</td>
        <td>{ticket.Status}</td>
      </tr>
    );
  });
}
export default Ticket;
