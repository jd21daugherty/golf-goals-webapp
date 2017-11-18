import * as React from 'react';
import './styles/sign-in-with-service.component.css';

import SignInWithFacebookComponent from './components/sign-in-with-facebook.component';
import SignInWithTwitterComponent from './components/sign-in-with-twitter.component';

const SignInWithServiceComponent = () => (
    <div>
        <div className="sign-in-button"><SignInWithFacebookComponent/></div>
        <div className="sign-in-button"><SignInWithTwitterComponent/></div>
    </div>
)

export default SignInWithServiceComponent