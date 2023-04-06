import React from 'react'
import '../styles/ContactCard.css';

const ContactCard = (props) => {
  const { id, name, phone, email } = props.contact;

  return (
    <div className="contact-card">
      <div className='details'>
        <img className="contact-picture" src={require("../images/user-avatar.png")} alt="Image not found!" />
        <div>
          <span>ID: {id} </span>
          <span>Name: {name} </span>
          <span>Phone: {phone} </span>
          <span>Email: {email} </span>
        </div>
      </div>
      <div className='operations'>
        <button className='delete' onClick={() => props.clickHandler(id)}>
          <img src={require("../images/delete.png")} alt="Image not found!" />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;