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
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import image from "../assets/image/banner.png";
import google from "../assets/icons/google.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Gecerli bir email adresi giriniz!")
      .min(5, "Email en az 5 karakterden olusmalidir!")
      .max(50, "Email en fazla 50 karakterden olusmalidir!")
      .required("Email kismini bos birakamazsiniz!"),
    password: yup
      .string()
      .min(8, "Parola en az 8 karakterden olusmalidir!")
      .max(50, "Parola en fazla 50 karakterden olusmalidir!")
      .required("Parola kismini bos birakamazsiniz!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Parola en az bir büyük harf, bir kücük harf, bir sayi ve bir özel karakter icermelidir!"
      ),
  });

  const onSubmit = async (values) => {
    const dto = {
      email: values.email,
      password: values.password
    }

    
  }
  return (
    <Container className="container">
      <Row className="page-all">
        <Col className="loginpage" lg={4}>
          <h5 className="your-logo">Your logo</h5>
          <h4 className="your-login">Login</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="lp-label">Email address</Form.Label>
              <Form.Control
                className="lp-input"
                type="email"
                placeholder="username@gmail.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lp-label">Password</Form.Label>
              <Form.Control
                className="lp-input"
                type="password"
                placeholder="Password"
              />
              <a className="forgot-pass" href="#">
                Forgot Password?
              </a>
            </Form.Group>

            <Button className="w-100" variant="success" type="submit">
              Login
            </Button>

            <p className="lp-continue">or continue with</p>
            <ButtonGroup className="buttons">
              <Button className="lp-google">
                <img src={google} alt="google" />
              </Button>
              <Button className="lp-github">
                <img src={github} alt="github" />
              </Button>
              <Button className="lp-facebook">
                <img src={facebook} alt="facebook" />
              </Button>
            </ButtonGroup>
            <p className="lp-account">
              Don't have an account yet?
              <a href="#" className="lp-register">
                {" "}
                Register for free
              </a>
            </p>
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
