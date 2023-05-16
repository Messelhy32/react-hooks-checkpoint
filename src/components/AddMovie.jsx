/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function AddMovie({ addMovie }) {
  const initialValues = {
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    posterURL: Yup.string(),
    rating: Yup.number()
      .required("Rating is required")
      .typeError("Rating must be a number")
      .min(1, "Rating must be between 1 and 10")
      .max(10, "Rating must be between 1 and 10"),
  });
  const handleSubmit = (values, { resetForm }) => {
    addMovie(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="text-left">
          <div className="mb-4">
            <label htmlFor="title" className="mr-2">
              Title
            </label>
            <Field id="title" name="title" className="border mr-2" />
            {errors.title && touched.title && (
              <span className="text-red-600 font-semibold">{errors.title}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="mr-2">
              Description
            </label>
            <Field
              id="description"
              name="description"
              className="border mr-2"
            />
            {errors.description && touched.description && (
              <span className="text-red-600 font-semibold">
                {errors.description}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="posterURL" className="mr-2">
              Poster URL
            </label>
            <Field id="posterURL" name="posterURL" className="border mr-2" />
            {errors.posterURL && touched.posterURL && (
              <span className="text-red-600 font-semibold">
                {errors.posterURL}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="mr-2">
              Rating
            </label>
            <Field id="rating" name="rating" className="border mr-2" />
            {errors.rating && touched.rating && (
              <span className="text-red-600 font-semibold">
                {errors.rating}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="rounded-sm py-2 px-3 mb-4 bg-green-200 text-green-950 font-semibold"
          >
            Add Movie
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AddMovie;
