import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// import { Row, Col, InputGroup, Button, Form } from "react-bootstrap";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
export default function FormTemplate(props) {
  const PCFormDiv = { maxWidth: "50vw", margin: "auto" };
  const MobFormDiv = { maxWidth: "90vw", margin: "auto" };
  return (
    <div style={props.device ? PCFormDiv : MobFormDiv}>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.info(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="m-2">
            <Field name="firstName" className="m-2" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" className="m-2" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" className="m-2" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <button type="submit" className="m-2">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
