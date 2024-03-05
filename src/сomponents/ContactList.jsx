/* eslint-disable react/prop-types */
import Contact from "./Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = ({ contactBook, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactBook.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
