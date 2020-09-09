import { useState, useRef } from "react";
import fetch from "isomorphic-unfetch";
import { Formik, Form } from "formik";

import schema from "./validation";
import { Message } from "../";
import { TextInput, DropDown } from "./components";

import {
  Container,
  SubmitButton,
  SubmitContainer,
} from "./UserSignUpForm.styles";

interface ResponseType {
  status: number;
  active: boolean;
}

interface PropsType {
  name: string;
  type: string;
  placeholder: string;
}

const UserSignUpForm = () => {
  const [apiResponse, setResponse] = useState<ResponseType>({
    status: 0,
    active: false,
  });

  const options = [
    { value: "terrier", label: "Terrier" },
    { value: "hound", label: "Hound" },
    { value: "corgie", label: "Corgie" },
    { value: "jaz", label: "Jaz" },
  ];

  const ref = useRef(null);

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
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("-->> Success");
          console.log(values);
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

          <DropDown
            label="What is your dogs breed?"
            name="dogBreed"
            options={options}
            iid="dogBreed"
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
