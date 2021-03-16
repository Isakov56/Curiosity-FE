import React, { setState, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {withRouter, useHistory} from 'react-router-dom'

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const namelHandler = (e) => {
    setName(e.target.value);
  };
  const surnameHandler = (e) => {
    setSurname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    try {
      e.preventDefault();
      fetch("http://localhost:3003/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password,
        })
    });
    history.push("/login");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={namelHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={surnameHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={emailHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordHandler}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
      </Form>
    </div>
  );
}

export default withRouter(SignUp)
