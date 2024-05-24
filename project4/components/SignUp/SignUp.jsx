import React from 'react'
import { Link } from "react-router-dom"
import "./SignUp.css"

function SignUp() {
    return (
        <>
            <div className='main'>
                <h1>Sign Up</h1>
                <div className="input">
                    <input type="text" placeholder='Enter your first name' />
                    <input type="text" placeholder='Enter your last name' />
                    <input type="text" placeholder='Enter your username' />
                    <input type="password" placeholder='Enter your passwords' />
                </div>
                <button type='submit'>Login</button>
                <span><Link to="/login">Already a User</Link> </span>
            </div>
        </>
    )
}

export default SignUp