import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getEmployees } from "../../data/EmployeesData";
import { useNavigate, useParams } from "react-router-dom";
import { assignTicket, getServiceTicket } from "../../data/serviceTicketsData";

const initialState = {
  employeeId: '',
};

export default function AssignTicket() {
  const { id } = useParams();
  const [formInput, setFormInput] = useState(initialState);
  const [employees, setEmployees] = useState([]);
  const [ ticket, setTicket] = useState([]);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { 
      id: parseInt(id),
      customerId: ticket.customerId,
      employeeId: parseInt(formInput.employeeId),
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: ticket.dateCompleted,
    };
    
    assignTicket(parseInt(id), payload).then(() => {navigate(`/tickets/${id}`)});
  };

  const optionsEmployees = employees.map((e) => (
    <option key={e.id} value={e.id}>{e.name}</option>
  ));

  useEffect(() => {
    getEmployees().then(setEmployees);
    getServiceTicket(id).then(setTicket);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Select an employee to assign to your ticket:
          </Label>
          <Input
            type="select"
            name="employeeId"
            id="select"
            value={formInput.employeeId}
            onChange={handleChange}
            required
          >
            <option value="">Select an employee</option>
            {optionsEmployees}
          </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
};
