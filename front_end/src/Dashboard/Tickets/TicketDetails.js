import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tickets } from "../../Test DB/tickets";
import { comments } from "../../Test DB/comments";
import SelectedTicketForm from "./TicketDetailsForm";

function TicketDetails(props) {
  const { ticketId } = useParams();

  const ticket = tickets.find((ticket) => {
    return ticket.TicketID.toString() === ticketId;
  });

  const comment = comments.filter((comment) => {
    return comment.TicketID.toString() === ticketId;
  });

  const [formData, setFormData] = useState(ticket);

  return (
    <div>
      <SelectedTicketForm formData={formData} comments={comment} />
    </div>
  );
}

export default TicketDetails;
