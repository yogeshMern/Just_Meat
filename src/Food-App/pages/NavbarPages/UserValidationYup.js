import * as Yup from "yup";

export const userValidation = Yup.object({
  fullname: Yup.string().min(6).required("Please enter you full name"),
  email: Yup.string().email().required("Please enter your email address"),
  mobilenumber: Yup.number().min(10).required("Please enter your mobilenumber"),
  message: Yup.string().required("Please enter you message"),
});
