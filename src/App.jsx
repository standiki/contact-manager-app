import React, { useState, useReducer } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Input from './components/pages/Input';

import contactData from './components/contacts';
// import { reducer } from './components/reducer';

export default function App() {
  const [contact, setContact] = useState(contactData); 
  const [formData, setFormData] = React.useState({
    contactName: '',
    contactPhone: '',
    contactAddress: ''
});
  
// const [state, dispatch] = useReducer(reducer, contactData);

// console.log(state);

  function handleSubmit(event) {
    event.preventDefault()
    const {contactName: name, contactPhone: phone, contactAddress: address } = formData;
    if (name && phone && address) {
      const newContact = {...formData, id: new Date().getDate().toLocaleString()}
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
    <main className='main'>
      <Header />
      <Input 
        formData={formData} 
        handleSubmit={handleSubmit}
        handleChange={handleChange} 
      />
      <section className='container'>
        <h1><span className='text-gold mb-2'>contact</span> list</h1>
        {contact.map((contact) => {
          return (
            <Contact 
              key={contact.id} 
              {...contact}
              removeContact={removeContact}
            />
          )
        })}
      </section>
    </main>
  )
}
