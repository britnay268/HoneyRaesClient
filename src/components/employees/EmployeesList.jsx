import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getEmployees } from "../../data/EmployeesData";

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
            <td>{e.name}</td>
            <td>{e.speciality}</td>
            <td>
              <Link to={`${e.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
