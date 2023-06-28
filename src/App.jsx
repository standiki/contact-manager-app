import React, { useState } from "react";

// components
import Header from "./components/Header";
import Landing from "./components/pages/Landing";
import AddContact from "./components/pages/AddContact";
import EditContact from "./components/pages/EditContact";
import About from "./components/pages/About";

// dependencies
import { Routes, Route, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

// initial contact data
import data from "./components/contacts";

export default function App() {
  const [contacts, setContacts] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  // adds new contact
  function handleSubmit(event) {
    event.preventDefault();
    const { name, phone, address } = formData;
    if (name && phone && address) {
      const newContact = { ...formData, id: nanoid() };
      setContacts([newContact, ...contacts]);

      // clear inputs
      setFormData({
        name: "",
        phone: "",
        address: "",
      });
    } else {
      console.log("Empty values");
    }
    navigate("/");
  }

  // updates edited contact
  function updContact(id, event) {
    event.preventDefault();
    setContacts((prevContacts) => {
      const { name, phone, address } = formData;
      if (name && phone && address) {
        return prevContacts.map((contact) => {
          return contact.id === parseInt(id)
            ? { ...contact, name, phone, address }
            : contact.id === id
            ? { ...contact, name, phone, address }
            : contact;
        });
      } else {
        console.log("Empty values");
      }
    });
    // clear inputs
    setFormData({
      name: "",
      phone: "",
      address: "",
    });
    navigate("/");
  }

  // match selected contact for editing
  function findContact(id) {
    return contacts.find((contact) => {
      const { name, phone, address } = contact;
      return contact.id === parseInt(id)
        ? setFormData({
            name: name,
            phone: phone,
            address: address,
          })
        : contact.id === id
        ? setFormData({
            name: name,
            phone: phone,
            address: address,
          })
        : undefined;
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function removeContact(id) {
    const filteredContact = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContact);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Landing contacts={contacts} removeContact={removeContact} />
          }
        />
        <Route
          path="/add"
          element={
            <AddContact
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          }
        />
        <Route
          path="/contact/edit/:id"
          element={
            <EditContact
              handleChange={handleChange}
              formData={formData}
              findContact={findContact}
              updContact={updContact}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
