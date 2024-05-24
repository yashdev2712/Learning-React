import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'


function Login() {
    return (
        <>
            <div className='main'>
                <h1>Login</h1>
                <div className="input">
                    <input type="text" placeholder='Enter your username' />
                    <input type="password" placeholder='Enter your passwords' />
                </div>
                <button type='submit'>Login</button>
                <span><Link to="/signup">New user</Link> </span>
            </div>
        </>
    )
}

export default Login