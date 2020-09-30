import { useState } from "react";
import { Formik, Form } from "formik";

import schema from "./validation";
import { AnimationWindow, Bar, Button, Title, Text } from "../";

import { TextInput } from "../../../FormPage/components";

import { Container, InputContainer, FormStyles } from "./ProgressBar.styles";

const ProgressBar = () => {
  const [percent, setPercent] = useState(0);

  return (
    <Container>
      <Title>Progress Bar</Title>
      <Text>Press the button to trigger the animation</Text>
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
              <Button>See Code</Button>
            </FormStyles>
          </Form>
        </Formik>
      </InputContainer>
    </Container>
  );
};

export default ProgressBar;
