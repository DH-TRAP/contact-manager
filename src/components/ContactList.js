import React from 'react'
import '../styles/ContactList.css';
import ContactCard from './ContactCard';

const ContactList = (props) => {
// callback function to pass id.
    const deleteContactHandler = (id) => {
        props.getContactId(id);
      };
// rendering all contacts from 'contacts' state.
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        )
    })
    return(
    <div id='ContactList'>
        {renderContactList}
        <button className='save'>
            <img src={require("../images/save.png")} alt="Image not found!" />
        </button>   
    </div>
    );
}

export default ContactList;