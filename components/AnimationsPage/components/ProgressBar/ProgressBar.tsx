import { useState } from "react";
import { Formik, Form } from "formik";

import schema from "./validation";
import { AnimationWindow, Bar, Button, Title, Text, Link } from "../";

import { TextInput } from "../../../FormPage/components";

import { Container, InputContainer, FormStyles } from "./ProgressBar.styles";

const ProgressBar = () => {
  const [percent, setPercent] = useState(0);

  return (
    <Container>
      <Title>Progress Bar</Title>
      <Text>
        Enter a numeric percentage and press Enter or click the Submit button
      </Text>
      <AnimationWindow>
        <Bar percent={percent} />
      </AnimationWindow>

      <InputContainer>
        <Formik
          initialValues={{
            progressPercent: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            const { progressPercent } = values;

            setPercent(parseInt(progressPercent));
            setSubmitting(false);
          }}
        >
          <Form>
            <FormStyles>
              <TextInput
                label=""
                name="progressPercent"
                type="number"
                placeholder="Enter progress %"
                showError={true}
              />
              <Button type="submit">Submit</Button>
              <Link
                target="_blank"
                href="https://github.com/bengrunfeld/bengrunfeld-dev/tree/master/components/AnimationsPage/components/ProgressBar"
              >
                See Code
              </Link>
            </FormStyles>
          </Form>
        </Formik>
      </InputContainer>
    </Container>
  );
};

export default ProgressBar;
