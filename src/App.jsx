import { useState, useEffect } from "react";
import "./App.css";
import contactBook from "./contactsBook.json";
import ContactList from "./сomponents/ContactList.jsx";
import Search from "./сomponents/Search.jsx";
import ContactForm from "./сomponents/ContactForm.jsx";

function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contact"));
    if (savedContacts) return savedContacts;
    return contactBook;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const visibleContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onFilter = (text) => {
    setFilter(text);
  };

  const addContact = (contactItem) => {
    setContact((prevContact) => [...prevContact, contactItem]);
  };

  const deleteContact = (id) => {
    const updContactList = contact.filter((item) => item.id !== id);
    setContact(updContactList);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact}></ContactForm>
      <Search onFilterInput={onFilter} />
      <ContactList contactBook={visibleContact} onDelete={deleteContact} />
    </>
  );
}

export default App;
