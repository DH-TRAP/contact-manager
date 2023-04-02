import '../styles/ContactManager.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import Heading from './Heading';
import AddContact from './AddContact';
import ContactList from './ContactList';

// Main Application
const ContactManager = () => {
    const [contacts, setContacts] = useState([]);
    const LOCAL_STORAGE_KEY = "Contacts"
// Hook to catch and add contact details from 'AddContact' component to 'contacts' state.
    const AddContactHandler = (contact) =>{
        setContacts([...contacts, { id: uuid(), ...contact }]);
    }
// Hook to catch id from 'ContactList' component and remove contact with that id.
    const removeContactHandler = (id) => {
        const copyContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(copyContactList);
    }
// To Retrive contacts from local storage when user refreshes the page.
    useEffect(() => {
        const retriveContacts = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setContacts(retriveContacts);
    }, []);
// To Store Contacts in local storage.
    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return( 
        <main>
        <Heading />
        <AddContact AddContactHandler={AddContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
        </main>
    );
}

export default ContactManager;