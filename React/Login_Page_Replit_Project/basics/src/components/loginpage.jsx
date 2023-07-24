import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import "../components/css/style.css";
/* import { Octokit } from "@octokit/rest"; */
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import Spinner from "react-bootstrap/Spinner";
import image from "../assets/image/banner.png";
import google from "../assets/icons/google.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";

/* async function createRepoAndPush(taskId, taskName) {
  const octokit = new Octokit({ auth: "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" });

  try {
    const repoName = `task-${taskId}-${taskName.replace(/\s+/g, "-").toLowerCase()}`;
    const response = await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      auto_init: true,
    });

    await octokit.git.createRef({
      owner: response.data.owner.login,
      repo: response.data.name,
      ref: "refs/heads/main",
      sha: response.data.initial_commit.sha,
    });

    console.log(`Task "${taskName}" GitHub reposu başariyla oluşturuldu ve push edildi.`);
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
}

const taskId = "LP-001";
const taskName = "React JS ile Login Page Olustur";
createRepoAndPush(taskId, taskName); */

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@\$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
      ),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);

    if (values.email == "abc@gmail.com" && values.password === "Abcde?12345") {
      console.log("Giris basarili");
      navigate("/home");
    } else if (values.email !== "abc@gmail.com") {
      formik.setFieldError("email", "Email hatali");
    } else if (values.password !== "Abcde?12345") {
      formik.setFieldError("password", "Parola hatali");
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const isButtonDisabled =
    formik.isSubmitting || (formik.touched && !formik.isValid);

  return (
    <Container className="container">
      <Row className="page-all">
        <Col className="loginpage" lg={4}>
          <h5 className="your-logo">Your logo</h5>
          <h4 className="your-login">Login</h4>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="lp-label">Email address</Form.Label>
              <Form.Control
                className="lp-input"
                type="email"
                name="email"
                placeholder="username@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.email && !formik.errors.email}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lp-label">Password</Form.Label>
              <Form.Control
                className="lp-input"
                type="password"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                isValid={formik.touched.password && !formik.errors.password}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
              <Link to="/password-reset" className="forgot-pass" href="#">
                Forgot Password?
              </Link>
            </Form.Group>

            <Button
              disabled={isButtonDisabled}
              className="w-100"
              variant="success"
              type="submit"
            >
              {loading ? (
                <Spinner className="spinner" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Login"
              )}
            </Button>

            <p className="lp-continue">or continue with</p>
            <ButtonGroup className="buttons">
              <a
                href="https://www.google.com"
                target="_blank"
                className="lp-google"
              >
                <img src={google} alt="google" />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                className="lp-github"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="lp-facebook"
              >
                <img src={facebook} alt="facebook" />
              </a>
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

export default {LoginPage,/*  createRepoAndPush */};
