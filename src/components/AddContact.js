import React, { useState } from 'react'
import '../styles/AddContact.css';

const AddContact = (props) => {
    const [contact, setContact] = useState({})

    function getDetails(e){
      e.preventDefault();
      if(contact.name && contact.phone && contact.email) props.AddContactHandler(contact);
      else alert("All the details are mandatory!")
    }
    
    function getValue(e){
      setContact ({
        ...contact,
        [e.target.name]:  e.target.value
      })
    }
    
    return(
        <div id='add-contact'>
        <form onSubmit={getDetails}>
            <div className="operation-title"> Add Contact </div>
            <div className='user-input'>
                <label className='name'>Name 
                    <input type="text" name="name" placeholder='Name' onChange={getValue}/> 
                </label>

                <label className='phone'>Phone 
                    <input type="number" name="phone" placeholder='Phone Number' onChange={getValue}/> 
                </label>
                
                <label className='email'>Email 
                    <input type="email" name="email" placeholder='E-Mail ID' onChange={getValue}/> 
                </label>
            </div>
            <button type="submit" className='btn-add-contact'> ADD </button>
        </form>
        </div>
    );
}

export default AddContact;