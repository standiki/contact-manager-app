import React, { useState } from 'react';
import Header from './components/Header';
import Landing from './components/pages/Landing';

import contactsData from './components/contacts'

export default function App() {
  const [contacts, setContacts] = useState(contactsData);
  console.log('value of contats: ', contacts);
  return (
    <main className='main'>
      <Header />
      <div className='container'>
        <h1><span className='text-gold mb-2'>contact</span> list</h1>
        {contacts.map((Contact) => {
          return (
            <Landing {...Contact} />
          )
        })}
      </div>
    </main>
  )
}
