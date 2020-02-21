import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

export const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>

)

export default SignInAndSignUpPage;