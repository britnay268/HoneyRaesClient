import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployee } from "../../data/EmployeesData";

export default function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployee(id).then(setEmployee);
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
          <td>{employee.serviceTickets.length}</td>
        </tr>
      </tbody>
    </Table>
  );
}
