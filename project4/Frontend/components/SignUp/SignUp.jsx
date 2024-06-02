import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./SignUp.css"
import axios from 'axios';

function SignUp() {
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [trigger, setTrigger] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (trigger) {
            const sendDataToBackend = async () => {
                try {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        userName: userName,
                        email: email,
                        password: password
                    })

                    if (response.status = 200) {
                        const token = response.data.token;
                        localStorage.setItem("authToken", token);
                        localStorage.setItem("User", userName);
                        navigate("/message")
                    }
                }
                catch (err) {
                    console.log("error:", err);
                }
                finally {
                    setTrigger(false)
                }
            }
            sendDataToBackend();
        }
    }, [userName, email, password, trigger, navigate])

    const handleOnClick = () => {
        setTrigger(true);
    }
    return (
        <>
            <div className='main'>
                <div className='content'>
                    <h1>Sign Up</h1>
                    <div className="input">
                        <input type="text" placeholder='Enter your User Name' onChange={(e) => { setUserName(e.target.value) }} />
                        <input type="text" placeholder='Enter your Email' onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type='submit' onClick={() => { handleOnClick() }}>Login</button>
                    <span><Link to="/login">Already a User</Link> </span>
                </div>
            </div>
        </>
    )
}

export default SignUp