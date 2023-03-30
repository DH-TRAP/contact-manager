import './DisplayContact.css';
import Contact from './Contact';

function DisplayContact() {
  return (
    <div>
    <section className="display-contact">
      <Contact />
    </section>
    <button className='save'><img src={require("../../images/save.png")} alt="Image not found!" /></button>
    </div>
  );
}

export default DisplayContact;
