import '../styles/ContactManager.css';
import React, { useState } from 'react';
import Heading from './Heading';
import AddContact from './AddContact';
import ContactList from './ContactList';

const ContactManager = () => {
    let [contacts, setContacts] = useState([]);
    
    let AddContactHandler = (contact) =>{
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


// useEffect(() => {
//     const retriveContacts = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
//     if(retriveContacts) { setContacts(retriveContacts) }
// }, []);

// const LOCAL_STORAGE_KEY = "contacts";
// useEffect(() => {
//     window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
// });