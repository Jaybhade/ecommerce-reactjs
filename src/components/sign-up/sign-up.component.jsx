import React from 'react';
import './sign-up.styles.scss';
//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("Password don't match.");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setstate = {
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account.</h2>
                <span>Sign up with email and password.</span>

                <form action="" onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={displayName}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        onChange={this.handleChange}
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;