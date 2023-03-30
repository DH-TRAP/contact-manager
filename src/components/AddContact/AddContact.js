import { useState } from 'react';
import './AddContact.css';

function AddContact() {
  const [contact, setContact] = useState({})
 

function add(e){
  e.preventDefault();
  console.log(contact);
}

function getVal(e){
  setContact ({
    ...contact,
    [e.target.name]:  e.target.value
  })

}

  return (
    <section className="add-contact">
    <form onSubmit={add}>
      <div className="title"> Add Contact </div>
      <div className='input-group'>
        <label className='name'>Contact Name <input type="text" name="name" onChange={getVal}/> </label>
        <label className='phone'>Phone <input type="number" name="phone" onChange={getVal}/> </label>
        <label className='email'>Email <input type="email" name="email" onChange={getVal}/> </label>
      </div>
      <button type="submit" className='btn-add-contact'>
        Add
      </button>
    </form>
    </section>
  );
}

export default AddContact;