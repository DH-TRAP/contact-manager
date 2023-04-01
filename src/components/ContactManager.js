import '../styles/ContactManager.css';
import React, { useState } from 'react';
import Heading from './Heading';
import AddContact from './AddContact';
import ContactList from './ContactList';

const ContactManager = () => {
    const [contacts, setContacts] = useState([]);

    const AddContactHandler = (contact) =>{
        console.log(contact);
        setContacts([...contacts, contact]);
    }
    return( 
        <main>
        <Heading />
        <AddContact AddContactHandler={AddContactHandler}/>
        <ContactList contacts={contacts} />
        </main>
    );
}

export default ContactManager;