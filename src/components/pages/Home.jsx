import React from 'react';
import Contact from '../Contact';

export default function Home({ contacts, removeContact }) {
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
