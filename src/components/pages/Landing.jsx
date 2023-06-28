import React from "react";
import Contact from "../Contact";

export default function Landing({ contacts, removeContact }) {
  return (
    <div className="landing">
      <section className="container">
        <h1>
          <span className="text-gold mb-2">contact</span> list
        </h1>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              {...contact}
              removeContact={removeContact}
            />
          );
        })}
      </section>
    </div>
  );
}
