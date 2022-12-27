import * as yup from "yup";

export const userSchema = yup.object().shape({
  to_name: yup.string().required(),
  from_name: yup.string().email().required(),
  message: yup.string().min(4).required(),
});
