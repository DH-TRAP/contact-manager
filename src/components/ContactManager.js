import '../styles/ContactManager.css';
import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import Heading from './Heading';
import AddContact from './AddContact';
import ContactList from './ContactList';

// Main Application
const ContactManager = () => {
    const LOCAL_STORAGE_KEY = "Contacts"
    const [editContactId, setEditContactId] = useState(undefined)

    // hook to retrive contacts from local storage.
    const [contacts, setContacts] = useState((
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    ))

    // Callback to get & add contact details from 'AddContact' component to 'contacts' state.
    const AddContactHandler = (contact) => {
        setContacts([{ id: uuid(), ...contact }, ...contacts]);
    }

    // State to show edit contact.
    const [showContact, setShowContact] = useState([]);
    const updateContactHandler = (id) => {
        setEditContactId(id);
        const newContactList = contacts.filter((contact) => {
            return contact.id == id;
        });
        return setShowContact(newContactList[0]);
    }
    // State to change add button to update button.
    const [editMode, setEditMode] = useState(0);
    const EditModeHandler = (passMode) => {
        setEditMode(passMode);
    }

    const EditContactHandler = (editId, contact) => {
        contacts.forEach(updateContact);
        function updateContact(x) {
            if (x.id === editId) {
                x = { id: editId, ...contact }

                setEditMode(!editMode);
                // setContacts([{ id: uuid(), ...x }, ...contacts]);

                const editContactList = contacts.filter((contact) => {
                    return contact.id !== x.id;
                });

                setContacts([x, ...editContactList]);
            }
            else { return }
        }

    }

    // Callback to get id from 'ContactList' component and remove contact with that id.
    const removeContactHandler = (id) => {
        const copyContactList = contacts.filter((contact) => {
            return contact.id !== id;

        });
        setContacts(copyContactList);
    }
    // Callback to save contacts on click event.
    const saveContactHandler = (save) => {
        if (save) {
            // Storing Contacts in local storage.
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
        }
    }
    return (
        <main>
            <Heading />
            <AddContact AddContactHandler={AddContactHandler} EditContactHandler={EditContactHandler} showContact={showContact} editMode={editMode} editContactId={editContactId} />
            <ContactList contacts={contacts} getContactId={removeContactHandler} save={saveContactHandler} update={updateContactHandler} passEditMode={EditModeHandler} />
        </main>
    );
}

export default ContactManager;