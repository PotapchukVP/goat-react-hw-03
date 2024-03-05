/* eslint-disable react/prop-types */
import css from "./Search.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  search: "",
};

const Search = ({ onFilterInput }) => {
  const searchId = useId();

  const userInput = (text) => {
    onFilterInput(text);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {(formikProps) => (
        <Form className={css.searchContainer}>
          <label className={css.label} type="text" id={searchId}>
            Find contact by name
          </label>
          <Field
            className={css.searchField}
            type="input"
            name="search"
            id={searchId}
            onChange={(e) => {
              const inputValue = e.target.value;
              formikProps.setFieldValue("search", inputValue);
              userInput(inputValue);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Search;
