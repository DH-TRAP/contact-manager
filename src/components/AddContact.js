import React from 'react'
import '../styles/AddContact.css';

class AddContact extends React.Component {
    // State to maintain contact details.
    state = {
        name: "",
        phone: "",
        email: ""
    };

    // Function to add contact details on submit.
    getDetails = (e) => {
        e.preventDefault();
        // Checking whether fields are empty.
        if (this.state.name && this.state.phone && this.state.email) {
            if (this.props.editMode) {
                this.props.EditContactHandler(this.props.editContactId, this.state);
                // Clearing Input Fields.
                this.setState({ name: "", phone: "", email: "" });
                this.props.EditContact.name = '';
                this.props.EditContact.phone = '';
                this.props.EditContact.email = '';
            }
            else {
                // Passing Contact details to Contact Manager component.
                this.props.AddContactHandler(this.state);
                // Clearing Input Fields.
                this.setState({ name: "", phone: "", email: "" });
                this.props.EditContact.name = '';
                this.props.EditContact.phone = '';
                this.props.EditContact.email = '';
            }
        }
        else alert("All the details are mandatory!")
    }

    render() {
        return (
            <div id='add-contact'>
                <form onSubmit={this.getDetails}>
                    <div className="operation-title">{this.props.editMode ? 'Update' : 'Add'} Contact </div>
                    <div className='user-input'>
                        <label className='name'>Name
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={this.state.name || this.props.EditContact.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                        </label>

                        <label className='phone'>Phone
                            <input
                                type="number"
                                name="phone"
                                placeholder='Phone Number'
                                value={this.state.phone || this.props.EditContact.phone}
                                onChange={(e) => this.setState({ phone: e.target.value })}
                            />
                        </label>

                        <label className='email'>Email
                            <input
                                type="email"
                                name="email"
                                placeholder='Email ID'
                                value={this.state.email || this.props.EditContact.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </label>
                    </div>
                    <button type="submit" className='btn-add-contact' style={{ width: this.props.editMode ? "5rem" : "3.5rem" }}>{this.props.editMode ? 'UPDATE' : 'ADD'}</button>
                </form>
            </div >
        );
    }
}

export default AddContact;