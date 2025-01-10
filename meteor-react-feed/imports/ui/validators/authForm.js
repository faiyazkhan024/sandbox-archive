import * as yup from "yup";

const authFormValidator = yup.object({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Must provide a Valid Email"),
  password: yup
    .string()
    .min(8, "password must be atleast 8 characters")
    .max(25, "Password must be atlmost 25 characters")
    .required("Password is required"),
  confirm: yup
    .string()
    .min(8, "password must be atleast 8 characters")
    .max(25, "Password must be atlmost 25 characters")
    .required("Password is required"),
});

module.exports = authFormValidator;
