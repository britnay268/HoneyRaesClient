import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from "../../data/customersData";

export default function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getCustomerById(id).then(setCustomer);
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Customer</th>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{customer.address}</td>
          </tr>
        </tbody>
      </Table>
      <h5>Tickets</h5>
      {customer.serviceTickets.map((st) => (
          <p key={st.id}>
            <strong>Ticket ID:</strong> {st.id}<br />  
            <strong>Description:</strong> {st.description} <br /> 
            <strong>Emergency:</strong> {st.emergency ? "Yes" : "No"}
            <hr />
          </p>
      ))}
    </>
  );
}
