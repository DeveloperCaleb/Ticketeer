import React from "react";
import Table from "react-bootstrap/Table";
import Ticket from "./Ticket";

function TicketList(props) {
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <Ticket />
      </tbody>
    </Table>
  );
}

export default TicketList;
