import React from 'react'
import '../styles/ContactCard.css';
import editIcon from '../images/edit.png'
import deleteIcon from '../images/delete.png'

const ContactCard = (props) => {
  const { id, name, phone, email } = props.contact;
  return (
    <div className="contact-card">
      <div className='details'>
        <img className="contact-picture" src={require("../images/user-avatar.png")} alt="Image not found!" />
        <div>
          <span>Name: {name} </span>
          <span>Phone: {phone} </span>
          <span>Email: {email} </span>
        </div>
      </div>
      <div className='operations'>
        <button className='edit' onClick={() => { props.editId(id); props.editMode(1); }}>
          <img src={editIcon} alt="Image not found!" />
        </button>
        <button className='delete' onClick={() => props.clickHandler(id)}>
          <img src={deleteIcon} alt="Image not found!" />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;