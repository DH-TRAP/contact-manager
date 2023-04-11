import React from 'react'
import '../styles/ContactList.css';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    // callback function to pass id.
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const passEditId = (id) => {
        props.update(id);
    };
    const editMode = (mode) => {
        props.passEditMode(mode);
    };

    // rendering all contacts from 'contacts' state.
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
                editId={passEditId}
                editMode={editMode}
            />
        )
    })
    return (
        <div id='ContactList'>
            {renderContactList}
            <button onClick={() => props.save(true)} className='save'>
                <img src={require("../images/save.png")} alt="Image not found!" />
            </button>
        </div>
    );
}

export default ContactList;