import React from "react";
import { useParams } from "react-router-dom";
import { tickets } from "../../Test DB/tickets";

function TicketDetails(props) {
  const { ticketId } = useParams();

  const ticket = tickets.find((ticket) => {
    return ticket.TicketID.toString() === ticketId;
  });

  return (
    <div>
      <div>Title: {ticket.Title}</div>
      <div>Ticket ID: {ticket.TicketID}</div>
      <div>Created At: {ticket.CreatedAt}</div>
      <div>Updated At: {ticket.UpdatedAt}</div>
      <div>Description: {ticket.Description}</div>
      <div>Assigned to: {ticket.AssignedTo}</div>
    </div>
  );
}

export default TicketDetails;
