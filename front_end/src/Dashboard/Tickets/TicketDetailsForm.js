import React from "react";
import "./TicketDetailsForm.css";

function SelectedTicketForm({ formData, comments }) {
  return (
    <div className="ticket-container">
      <h1>{formData.Title}</h1>
      <div className="time">
        <div>Created At: {formData.CreatedAt}</div>
        <div>Updated At: {formData.UpdatedAt}</div>
      </div>

      <div className="ticket-owner">
        <h2 className="ticketId">Ticket {formData.TicketID}</h2>
        <div>Assigned to: {formData.AssignedTo}</div>
      </div>

      <div className="description">Description: {formData.Description}</div>
      <div className="comments">Comments:</div>
      <div>
        {comments
          .map((comment, i) => {
            return (
              <div key={i}>
                {comment.Comment}
                {comment.CreatedAt}
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}

export default SelectedTicketForm;
