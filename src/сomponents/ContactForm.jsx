// eslint-disable-next-line react/prop-types
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const ContactForm = ({ onAddContact }) => {
  const nameID = useId();
  const numberID = useId();

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        const newContact = {
          ...values,
          id: Date.now().toString(),
        };
        onAddContact(newContact);
        actions.resetForm();
        console.log("OnSubmit");
      }}
    >
      <Form className={css.container}>
        {/*  */}
        <label className={css.label} type="text" id={nameID}>
          Name
        </label>
        <Field
          className={css.form}
          type="input"
          name="name"
          id={nameID}
        ></Field>

        <label className={css.label} type="text" id={numberID}>
          Number
        </label>
        <Field
          className={css.form}
          type="input"
          name="number"
          id={numberID}
        ></Field>

        <div className={css.buttonContainer}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>

        {/*  */}
      </Form>
    </Formik>
  );
};

export default ContactForm;
