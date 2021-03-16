import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const history = useHistory();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:3003/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.ok) {
        
        const data = await res.json()
        localStorage.setItem("JWTToken", data.token);
        history.push("/profile");
      } else {
        setAlert(true);
      }
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
      <Form onSubmit={submit} style={{border: "1px solid", width: "16rem"}} className="p-2">
        {alert ? (
          <Alert variant="danger" className="mt-3">
            Email or Password is wrong. Please try again.
          </Alert>
        ) : (
          <span></span>
        )}
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
        <div className="d-flex">
        <Button variant="primary" type="submit">
          Log in 
        </Button>
        <Link to="/signup">
            <Button className="ml-1 secondary">Sign up</Button>
        </Link>

        </div>
      </Form>
    </div>
  );
}
