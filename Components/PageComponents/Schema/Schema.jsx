import * as yup from "yup";
export const Schema = yup.object().shape({
  title: yup.string().required("title is required !"),
  // subTitle: yup.string().matches(/^[A-z]+$/ , 'Is not in correct format').required("Sub Title is empty!"),
  // paragraph: yup.string().required("paragraph is required !"),
  // image: yup.string().required("Image File is required !"),
});
