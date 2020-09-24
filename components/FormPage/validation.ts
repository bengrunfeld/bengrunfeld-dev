import * as Yup from "yup";

const schema = Yup.object({
  fullName: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  yearsExperience: Yup.string().required("Required"),
});

export default schema;
