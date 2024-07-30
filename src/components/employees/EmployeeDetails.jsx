import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";


export default function EmployeeDetails() {
  const { id } = useParams();

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    getEmployee(id).then(setEmployees);
  }, []);

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Employee</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Speciality</th>
          <td>{employee.speciality}</td>
        </tr>
        <tr>
          <th scope="row">Service Tickets</th>
          <td>{null}</td>
        </tr>
      </tbody>
    </Table>
  );
}
