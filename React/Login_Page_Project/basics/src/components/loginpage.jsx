import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import "../components/css/style.css";
import image from "../assets/image/banner.png";
import google from "../assets/icons/google.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";

const LoginPage = () => {
  return (
    <Container className="container">
      <Row className="page-all">
        <Col className="loginpage" lg={4}>
          <h4>Your logo</h4>
          <h3>Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="lp-label">Email address</Form.Label>
              <Form.Control type="email" placeholder="username@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lp-label">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <a className="forgot-pass" href="#">
                Forgot Password?
              </a>
            </Form.Group>

            <Button className="w-100" variant="primary" type="submit">
              Sign in
            </Button>

            <p>or continue with</p>
            <ButtonGroup>
              
              <Button>
                <img src={google} alt="google" />
              </Button>
              <Button>
                <img src={github} alt="github" />
              </Button>
              <Button>
                <img src={facebook} alt="facebook" />
              </Button>
            </ButtonGroup>
            <p>Don't have an account yet?<a href="#" className="lp-register"> Register for free</a></p>
          </Form>
        </Col>
        <Col className="image" lg={6}>
          <img src={image} alt="banner" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
