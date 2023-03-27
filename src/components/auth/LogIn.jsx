import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const history = useHistory();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  //const [showMessage, setShowMessage] = useState(false);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  
  console.log('khumo')
  console.log('aki')
  const submit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://curiosity-be.onrender.com/api/users/login", {
      //const res = await fetch("http://localhost:3003/api/users/login", {
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
        history.push("/profile/posts");
        
      } else {
        setAlert(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="login">
    <div className="con rounded pb-5">
      <div className="d-flex flex-column justify-content-center align-items-center m-4">
        <h1 className="main-logo-login">Curiosity</h1>
        <h6 className="text-muted">A place to share the knowlidge and better understanding the world</h6>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-50 border-right px-3">
          <div className="text-secondary">By continuing, you confirm that you have read and agree to uriosity's
            <Link className="mx-1">
              Terms of Service 
            </Link>
            and 
            <Link className="mx-1">
            Privacy Policy 
            </Link>
          </div>
          <div className="border mt-5 my-2 p-2 loginButton">Continue with Google</div>
          <div className="border my-2 p-2 loginButton">Continue with Facebook</div>
          <div className="loginButton">
            <Link to="/signup" classNama='signupHover'>
              <h6 className="d-flex  flex-column justify-content-center align-items-center my-2 p-2 signupHover">Sing up with your email address</h6>
            </Link>
          </div>
        </div>
        <div className="w-50 px-3">
          <Form onSubmit={submit} className="p-2">
            {alert ? (
              <Alert variant="danger" className="mt-3">
                Email or Password is wrong. Please try again.
              </Alert>
            ) : (
              <span></span>
            )}
            <div className="border-bottom py-2 my-2">Log in</div>
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
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Log in 
              </Button>
              
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  );
}
