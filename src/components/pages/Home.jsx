import React, { useState } from 'react';
import Contact from '../../components/Contact';

import contactsData from '../../components/contacts'

export default function Home() {
  const [contacts, setContacts] = useState(contactsData);

  function removeContact(id) {
    const newConctacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newConctacts);
  }

  return (
    <div className='home'>
      <section className='container'>
        <h1><span className='text-gold mb-2'>contact</span> list</h1>
        {contacts.map((contact) => {
          return (
            <Contact 
              key={contact.id} 
              {...contact}
              removeContact={removeContact}
            />
          )
        })}
      </section>
    </div>
  )
}
