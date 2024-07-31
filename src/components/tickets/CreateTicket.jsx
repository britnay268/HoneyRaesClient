import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { getCustomers } from "../../data/customersData";
import { getEmployees } from "../../data/EmployeesData";


const initialState = {
  customerId: '',
  description: '',
  emergency: false,
}
export default function CreateTicket() {
  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
    getEmployees().then(setEmployees);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const optionsCustomers = customers.map((c) => (
    <option key={c.id} value={c.id}>{c.name}</option>
  ));

  const optionsEmployees = employees.map((e) => (
    <option key={e.id} value={e.id}>{e.name}</option>
  ));
  return (
    <>
      <Form>
      <FormGroup>
          <Label for="customer">
            Select the Customer of the Service ticket
          </Label>
          <Input
            type="select"
            name="customerId"
            id="select"
            value={formInput.customerId}
            onChange={handleChange}
          >
            <option value="">Select a customer</option>
            {optionsCustomers}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            id="exampleEmail"
            name="description"
            value={formInput.description}
            placeholder="Describe your issue"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="emergency">
            Emergency?
          </Label>
          <Input
            id="emergency"
            name="emergency"
            value={formInput.emergency}
            type="select"
            onChange={handleChange}
          >
            <option value={true}>
              Yes
            </option>
            <option value={false}>
              No
            </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="employee">
            Pick an Employee
          </Label>
          <Input
            type="select"
            name="employeeId"
            id="select"
            value={formInput.employeeId}
            onChange={handleChange}
          >
            <option>Pick an employee</option>
            {optionsEmployees}
          </Input>
        </FormGroup>
      </Form>
    </>
  );
}
