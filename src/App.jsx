import React, { useState } from 'react';
import Header from './components/Header';
import Landing from './components/pages/Landing';
import Input from './components/pages/Input';
import About from './components/pages/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { nanoid } from 'nanoid';

import data from './components/contacts';

export default function App() {
  const [contact, setContact] = useState(data);
  const [formData, setFormData] = useState({
    contactName: '',
    contactPhone: '',
    contactAddress: ''
  });

  function handleSubmit(event) {
    event.preventDefault()
    const {contactName: name, contactPhone: phone, contactAddress: address } = formData;
    if (name && phone && address) {
      const newContact = {...formData, id: nanoid()}
      setContact([newContact, ...contact]);
      setFormData({
        contactName: '',
        contactPhone: '',
        contactAddress: ''
      });
    } else {
      console.log('Empty values')
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  };

  function removeContact(id) {
    const filteredContact = contact.filter((contact) => contact.id !== id)
    setContact(filteredContact);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <Landing 
            contacts={contact} 
            removeContact={removeContact}
          />}
        />
        <Route path='/input' element={
          <Input 
            formData={formData} 
            handleSubmit={handleSubmit}
            handleChange={handleChange} 
          />} 
        />
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
  )
}
