import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getServiceTicket } from "../../data/serviceTicketsData";

export default function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getServiceTicket(id).then(setTicket);
  }, []);

  if (!ticket) {
    return null;
  }

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Customer</th>
            <td>{ticket.customer.name}</td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td>{ticket.description}</td>
          </tr>
          <tr>
            <th scope="row">Emergency</th>
            <td>{ticket.emergency ? "yes" : "no"}</td>
          </tr>
          <tr>
            <th scope="row">Employee</th>
            <td>{ticket.employee?.name || "Unassigned"}</td>
          </tr>
          <tr>
            <th scope="row">Completed?</th>
            <td>{ticket.dateCompleted?.split("T")[0] || "Incomplete"}</td>
          </tr>
        </tbody>
      </Table>
      {
        ticket.employeeId == null 
        ? <Button color="primary" outline>
          <Link to={`/tickets/${id}/assign`}>Assign</Link>
        </Button>
        : ''
      }
    </>
  );
}
