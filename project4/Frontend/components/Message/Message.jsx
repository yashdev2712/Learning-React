import React, { useEffect, useState } from 'react';
import "./Messanger.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Message() {
    const [name, setName] = useState("");
    const [trigger, setTrigger] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/user/getuser?q=${name}`);
                setUserData(response.data[0]);

            } catch (err) {
                console.log("Error:", err);
            } finally {
                setTrigger(false);
            }
        }
        if (trigger) {
            fetchUser();
        }
    }, [trigger, name]);

    const handleOnClick = () => {
        setTrigger(true);
    };

    const logOut = () => {
        localStorage.clear();
        navigate('/login')
    }


    return (
        <div className='main'>
            <div className="sideBar">
                <div className='search'>
                    <h1>NautilusChat</h1>
                    <input
                        type="text"
                        placeholder='Enter the person Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleOnClick}>Search</button>
                </div>
                <div className='people'>
                    {
                        userData ?
                            <div className='people-message'>
                                <h4>{userData.userName}</h4>
                                {console.log(userData.userName)}
                                {/* <span>{userData.message}</span> */}
                            </div>
                            :
                            <div>
                                <h3>No User found</h3>
                            </div>
                    }
                </div>
                <button className='sticky-button' onClick={() => { logOut() }}>LogOut</button>
            </div>
            <div className="chat"></div>
        </div>
    )
}

export default Message;
