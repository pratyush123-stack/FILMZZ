import React, { useState, useEffect } from 'react'
import './loginscreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className = "LoginScreen" style={{
            textAlign: 'center',
        }}>
            <div className="LoginScreen_Background">
                <img className="LoginScreen_Logo"
                   src = "./Filmzzmainicon.png"
                    alt = "BackGround"
                />
                <button onClick={() => setSignIn(true)}
                    className="LoginScreen_button">Sign In</button>
                <div className="LoginScreen_Gradient"/>
            </div>
            <div className="LoginScreen_body">
                {signIn ? (<SignUpScreen/>): (
                    <>
                    <h1>WELCOME TO FILMZZ</h1>
                    <h2>Watch All Trailer And Details</h2>
                    <h3>Enter your email address to get started</h3>
                    <div className = "LoginScreen_input">
                        <form>
                            <input type="email" Placeholder="Email Address"/>
                            <button onClick={() => setSignIn(true)}
                                className="LoginScreen_input_getstarted">
                                Get started
                            </button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen
