import './styles/ContactManager.css';
import React from 'react';
import Heading from './Heading';
import AddContact from './AddContact';
import ContactList from './ContactList';

const ContactManager = () => {
    const contacts = [
        {
            id: '1',
            name: 'Parth',
            phone: '9323819012',
            email: 'adodn@gmail.com'
        },
        {
            id: '2',
            name: 'John',
            phone: '9321212912',
            email: 'wick@gmail.com'
        }
    ]
    return( 
        <main>
        <Heading />
        <AddContact />
        <ContactList contacts={contacts} />
        </main>
    );
}

export default ContactManager;