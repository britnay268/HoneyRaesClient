import { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

// const [ticket, setTickets] = useState(null);
// const [employee, setEmployees] = useState(null);
// const [customer, setCustomer] = useState(null);


export default function CreateTicket() {
  return (
    <>
      <Form>
      <FormGroup>
          <Label for="customer">
            Select the Customer of the Service ticket
          </Label>
          <Input
            id="customer"
            name="customer"
            type="select"
          >
            <option>
              Yes
            </option>
            <option>
              No
            </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Describe your issue"
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
          <Label for="emergency">
            Emergency?
          </Label>
          <Input
            id="emergency"
            name="emergency"
            type="select"
          >
            <option>
              Yes
            </option>
            <option>
              No
            </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="employee">
            Pick an Employee
          </Label>
          <Input
            id="emergency"
            name="emergency"
            type="select"
          >
            <option>
              Yes
            </option>
            <option>
              No
            </option>
          </Input>
        </FormGroup>
      </Form>
    </>
  );
}
