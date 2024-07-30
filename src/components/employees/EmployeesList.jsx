import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import getEmployees from "../../data/EmployeesData";
import { Link } from "react-router-dom";

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Speciality</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={`ticket-${e.id}`}>
            <th scope="row">{e.id}</th>
            <td>{e.description}</td>
            <td>{e.emergency ? "yes" : "no"}</td>
            <td>{e.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${e.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
