import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Message } from "../";
import { TextInput } from "./components";

import {
  Container,
  SubmitButton,
  SubmitContainer,
} from "./UserSignUpForm.styles";

interface ResponseType {
  status: number;
  active: boolean;
}

const UserSignUpForm = () => {
  const [apiResponse, setResponse] = useState<ResponseType>({
    status: 0,
    active: false,
  });

  return (
    <Container>
      <Message data={apiResponse} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          petName: "",
          petWeight: "",
          idealPetWeight: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(8, "Password is too short - should be 8 chars minimum."),
          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
          petName: Yup.string().required("Required"),
          petWeight: Yup.number()
            .required("Required")
            .min(3, "Weight must be between 3lbs and 180lbs")
            .max(180, "Weight must be between 3lbs and 180lbs"),
          idealPetWeight: Yup.number()
            .min(3, "Weight must be between 3lbs and 180lbs")
            .max(180, "Weight must be between 3lbs and 180lbs"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await fetch("/api/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const result = await response.json();
          const activeResult = Object.assign({}, result, { active: true });

          setResponse(activeResult);
          setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder=""
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder=""
          />

          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder=""
          />

          <TextInput
            label="Pet Name"
            name="petName"
            type="text"
            placeholder=""
          />

          <TextInput
            label="Pet Weight"
            name="petWeight"
            type="number"
            placeholder=""
          />

          <TextInput
            label="Ideal Pet Weight (optional)"
            name="idealPetWeight"
            type="number"
            placeholder=""
          />

          <SubmitContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
          </SubmitContainer>
        </Form>
      </Formik>
    </Container>
  );
};

export default UserSignUpForm;
