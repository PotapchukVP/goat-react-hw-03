/* eslint-disable react/prop-types */
import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contact}>
        <div className={css.nameSet}>
          <IoPersonSharp className={css.iconPerson} />
          <p>{contact.name}</p>
        </div>

        <div className={css.numberSet}>
          <FaPhoneAlt className={css.iconNumber} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
