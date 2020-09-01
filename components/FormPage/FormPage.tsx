import { UserSignUpForm, UserProfilePic } from "../";

import { Container } from "./FormPage.styles";

export const add = (a, b) => a + b;

const FormPage = () => (
  <Container>
    <UserProfilePic />
    <UserSignUpForm />
  </Container>
);

export default FormPage;
