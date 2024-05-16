import React, { useState } from 'react'
import "../index.css"

function Info() {
    const [name, setName] = useState("");
    const [collage, setCollage] = useState("");
    const [location, setLocation] = useState("");
    return (
        <>
            <div className='form'>
                <h3>Input Form</h3>
                <form>

                    <label htmlFor="">Enter Your Name</label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} />

                    <br />

                    <label>Enter Collage Name</label>
                    <input type="text" onChange={(e) => { setCollage(e.target.value) }} />


                    <br />

                    <label htmlFor="">Enter location</label>
                    <input type="text" onChange={(e) => { setLocation(e.target.value) }} />
                </form>
            </div>

            <Card name={name} collage={collage} location={location} />
        </>
    )
}

function Card({ name, collage, location }) {

    return (
        <>
            <div className='card'>
                <div className='image-container'>
                    <img src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg" alt="person-image" />
                </div>

                <div className='info'>
                    <h3>Name:{name}</h3>
                    <h3>Collage Name:{collage}</h3>
                    <h3>Collage Location:{location}</h3>
                </div>
            </div>
        </>
    )
}

export default Info