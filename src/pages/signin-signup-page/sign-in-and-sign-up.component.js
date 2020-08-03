import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.style.scss';

const SigninAndSignup = () => {
    return (
        <div className='signin-signup'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SigninAndSignup;