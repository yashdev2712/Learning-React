import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

function Login() {
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null);
    const [trigger, setTrigger] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (trigger) {
            const sendDataToBackend = async () => {
                try {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        userName: name,
                        password: password
                    })

                    console.log(response.data);
                    if (response.status == 200) {
                        const token = response.data.token;
                        localStorage.setItem("authToken", token);
                        navigate("/message")
                    }

                }
                catch (err) {
                    console.log("Error:", err);
                }
                finally {
                    setTrigger(false)
                }
            }

            sendDataToBackend();
        }
    }, [trigger, name, password, navigate])

    const handleOnClick = () => {
        setTrigger(true)
        console.log(trigger);
    }
    return (
        <>
            <div className='main'>
                <div className='content'>
                    <h1>Login</h1>
                    <div className="input">
                        <input type="text" placeholder='Enter your username' onChange={(e) => { setName(e.target.value) }} />
                        <input type="password" placeholder='Enter your passwords' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type='submit' onClick={() => { handleOnClick() }}>Login</button>
                    <div><Link to="/signup">New user</Link> </div>
                </div>
            </div>
        </>
    )
}

export default Login