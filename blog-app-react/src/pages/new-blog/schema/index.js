import * as Yup from "yup";

export const blogValidationSchema = Yup.object().shape({
  blogTitle: Yup.string("")
    .required("this field can not be empty")
    .min(10, "min 10 character is required")
    .max(20, "max 20 character is required"),

  blogBody: Yup.string("")
    .required("this field can not be empty")
    .min(50, "min 50 character is required")
    .max(100, "max 50 character is required"),

  blogAuthor: Yup.string(""),
});
