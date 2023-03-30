
function Contact() {
  return (
      <div className="contact">
        <div className='details'>
          <img className="contact-image" src={require("../../images/user-avatar.png")} alt="Image not found!" /> 
          <span>Name: {} Phone: {} Email: {}</span>
        </div>
        <div className='operations'>
          <button className='edit'> 
            <img src={require("../../images/edit.png")} alt="Image not found!" />
          </button>
          <button className='delete'>
            <img src={require("../../images/delete.png")} alt="Image not found!" />
          </button>
        </div>
      </div>
  );
}

export default Contact;
