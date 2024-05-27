import { Col, Form, FormGroup, Input, Button } from "reactstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    const loginUrl = "http://api.binary-coders.in/user/login";
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login Successful:", data);
        localStorage.setItem("user_id", data.uid);
        navigate("/employment-type");
      } else {
        if (data.error === "User not found") {
          setError("User not found. Please check your username.");
        } else {
          setError("An error occurred. Please try again.");
        }
      }

      navigate("/employment-type");
    } catch (error) {
      console.log("an error occur:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const ShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <Header />
      <Col lg={4} className="mx-auto mt-5">
        <div className="text-center mb-4 pb-2">
          <h2 className="register-cont">Login</h2>
        </div>
        <Form className="form login-form">
          <FormGroup className="mb-4 input-field-with-icon">
            <span className="input-icon">
              <i className="far fa-user"></i>
            </span>
            <Input
              type="text"
              placeholder="Email ID or Mobile Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-4 input-field-with-icon">
            <span className="input-icon showpsw" onClick={ShowPassword}>
              {showPassword ? (
                <i className="far fa-eye"></i>
              ) : (
                <i className="far fa-eye-slash"></i>
              )}
            </span>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div className="remember-me">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <p className="ms-auto mb-0">
              <Link to="/change-password" className="btn text-primary p-0">
                Forgot Password
              </Link>
            </p>
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <div className="text-center mt-5">
            <Link onClick={userLogin} className="btn btn-primary login-width">
              Login
            </Link>
          </div>
          <div className="signup-info mt-5">
            <p>
              Not a user
              <Link to="/register" className="btn text-primary">
                Signup
              </Link>
            </p>
          </div>
        </Form>
      </Col>
    </>
  );
}

export default Login;
