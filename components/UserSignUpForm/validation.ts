import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
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
  dogBreed: Yup.string().required("Required").min(4, "Must be above 4"),
});

export default schema;
