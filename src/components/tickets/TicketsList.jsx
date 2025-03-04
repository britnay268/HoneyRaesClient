import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { completedTicket, deleteServiceTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  const deleteTicket = (id) => {
    if (window.confirm(`Sure you want to delete ${id}?`)) {
      deleteServiceTicket(id);
      // This was a fast way to dynamically update the list when a ticket is deleted by checking to see if the id exists
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    }
  };

  const completeTheTicket = (id) => {
      completedTicket(id);
  };

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, [tickets]);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
            <Link onClick={() => deleteTicket(t.id)}>Delete</Link>
            </td>
            {
              t.employeeId != null && t.dateCompleted == null 
              ? <td>
                  <Button onClick={() => completeTheTicket(t.id)}>Complete</Button>
                </td>
              : ''
            }
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
