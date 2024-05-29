import React from 'react'
import "./Messanger.css"
import { data } from '../../Peopledata'


function Messanger() {
    const handleOnClick = () => { 
        
    }
    return (
        <>
            <div className='main'>
                <div className="sideBar">
                    <div className='search'>
                        <h1>NautilusChat</h1>
                        <input type="text" placeholder='Enter the person Name' />
                        <button onClick={() => { handleOnClick() }}>Create Group</button>
                    </div>
                    <div className='people'>
                        {
                            data && data.length > 0 ?
                                data.map(items => <div className='people-message' key={items.id}>
                                    <h2>{items.userName}</h2>
                                    <span>{items.message}</span>
                                </div>) :
                                <div>No message found</div>
                        }
                    </div>
                </div>
                <div className="chat"></div>
            </div>
        </>
    )
}

export default Messanger