import React from 'react'
import './styles/ContactList.css';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return(
            <>
            <ContactCard contact={contact}/>
            </>
        )
    })
    return(
    <div id='ContactList'>
        {renderContactList}
        <button className='save'>
            <img src={require("./images/save.png")} alt="Image not found!" />
        </button>   
    </div>
    );
}

export default ContactList;