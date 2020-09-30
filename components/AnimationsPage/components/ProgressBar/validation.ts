import * as Yup from "yup";

const schema = Yup.object({
  progressPercent: Yup.number()
    .required("Required")
    .min(0, "Can't be less than 0")
    .max(100, "Can't be more than 100"),
});

export default schema;
