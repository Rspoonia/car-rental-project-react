import React from 'react'
import './style.css'
export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = ({
            Name: '',
            Mobile: '',
            Email: ''
        })
    }
    onNameChange = (Name) => {
        this.setState({
            Name
        })
    }
    onMobileChange = (Mobile) => {
        this.setState({
            Mobile
        })
    }
    onEmailChange = (Email) => {
        this.setState({
            Email
        })
    }

    onSubmit = () => {
        console.log(this.state.Name);
        console.log(this.state.Mobile);
        console.log(this.state.Email);
    }
    render() {
        return (
            <div>
                <div className="login-design">
                    <h1>INQUIRY CONFIRMATION</h1> <br />
                    <p>Please fill the form to proceed</p>
                    <div className='form-data'>
                        <div className='login-components'>
                            <input className='input-field' type='Text' placeholder='Enter Full Name' onChange={($event) => this.onNameChange($event.target.value)} /><br />
                            <input className='input-field' type='Text' placeholder='Mobile Number (Required)' onChange={($event) => this.onMobileChange($event.target.value)} /><br />
                            <input className='input-field' type='email' placeholder='Email (Required)' onChange={($event) => this.onEmailChange($event.target.value)} /><br />
                            <button className='submit-data' onClick={this.onSubmit}> Submit</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
