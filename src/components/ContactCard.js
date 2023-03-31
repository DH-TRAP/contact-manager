import React from 'react'
import './styles/ContactCard.css';

const ContactCard = (props) => {
  const { id, name, phone, email } = props.contact;
  // console.log({...props.Contacts});
    return (
      <div className="contact-card">
        <div className='details'>
          <img className="contact-picture" src={require("./images/user-avatar.png")} alt="Image not found!" /> 
          <div>
              <span>Name: {name} </span>
              <span>Phone: {phone} </span>
              <span>Email: {email} </span>
          </div>
        </div>
        <div className='operations'>
          <button className='edit'> 
              <img src={require("./images/edit.png")} alt="Image not found!" />
          </button>
          <button className='delete'>
              <img src={require("./images/delete.png")} alt="Image not found!" />
          </button>
        </div>
      </div>
    );
}
  
export default ContactCard;