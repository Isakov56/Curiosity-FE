import React, { setState, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {withRouter, useHistory} from 'react-router-dom'
import axios from "axios"

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({
    surname: null,
    name: null,
    username: null,
    email: null,
    password: null
  });
  const history = useHistory();
  // const namelHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const surnameHandler = (e) => {
  //   setSurname(e.target.value);
  // };
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  // };
  const submit = () => {
    try {
    //   e.preventDefault();
    //   fetch("http://localhost:3003/api/users/register", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: name,
    //       surname: surname,
    //       email: email,
    //       password: password,
    //     })
    // })

    console.log('ggggggggggggggggggg')
    let res = axios.post('https://curiosity-be.onrender.com/api/users/register', credentials)
    //let res = axios.post('http://localhost:3003/api/users/register', credentials)
      history.push("/login");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vh",
      height: "100vh",
      margin: "auto"
      
    }}>
      <Form onSubmit={() => submit()}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => {setCredentials({...credentials, name: e.target.value})}}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter surname"
            onChange={(e) => {setCredentials({...credentials, surname: e.target.value})}}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Passowrd</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(SignUp)
