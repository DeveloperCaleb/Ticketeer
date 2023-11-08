import React from "react";
import { useNavigate } from "react-router-dom";
import { tickets } from "../../Test DB/tickets";

function Ticket(props) {
  let navigate = useNavigate();
  return tickets.map((ticket) => {
    return (
      <tr
        key={ticket.TicketID}
        onClick={() => {
          navigate(`/ticket/${ticket.TicketID}`);
        }}
      >
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
