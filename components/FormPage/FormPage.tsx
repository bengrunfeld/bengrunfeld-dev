import { Formik, Form } from "formik";
import schema from "./validation";

import { GitHubLink, BigTitle } from "../";

import { TextInput, DropDown } from "./components";

import {
  Container,
  FormStyles,
  SubmitButton,
  SubmitContainer,
  Text,
} from "./FormPage.styles";

const FormPage = () => {
  const experienceOptions = [
    { value: "3", label: "Three Years (3)" },
    { value: "5", label: "Five Years (5)" },
    { value: "7+", label: "More than Seven Years (7+)" },
  ];

  return (
    <Container>
      <BigTitle>Basic Form</BigTitle>
      <Text>
        This form uses Formik as a base, React-Select for the dropdowns, and Yup
        for data validation. Since this is just an example, no data is recorded.
        So when you navigate away from the page, all the data you entered will
        be deleted.
      </Text>

      <Formik
        initialValues={{
          fullName: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
          yearsExperience: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const {
            fullName,
            phone,
            email,
            password,
            confirmPassword,
            yearsExperience,
          } = values;
          alert(
            `
            fullName: ${fullName},
            phone: ${phone},
            email: ${email},
            password: ${password},
            confirmPassword: ${confirmPassword},
            yearsExperience: ${yearsExperience}`
          );
          setSubmitting(false);
        }}
      >
        <Form>
          <FormStyles>
            <TextInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder=""
              showError={true}
            />

            <TextInput
              label="Phone"
              name="phone"
              type="number"
              placeholder=""
              showError={true}
            />

            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder=""
              showError={true}
            />

            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder=""
              showError={true}
            />

            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder=""
              showError={true}
            />

            <DropDown
              label="Years of Experience"
              name="yearsExperience"
              options={experienceOptions}
              iid="yearsExperience"
            />

            <SubmitContainer>
              <SubmitButton type="submit">Submit</SubmitButton>
            </SubmitContainer>
          </FormStyles>
        </Form>
      </Formik>
      <GitHubLink href="https://github.com/bengrunfeld/bengrunfeld-dev/blob/master/components/FormPage/FormPage.tsx" />
    </Container>
  );
};

export default FormPage;
