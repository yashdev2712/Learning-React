import React from 'react'
import "../index.css"

export default function Result({ result }) {
    return (
        <>
            <div className='result'>
                <div className='header'>
                    <h3>Current Wheather</h3>
                </div>
                <div>
                    {/* <h2>Weather in {result.name}</h2>
                    <p>Temperature: {result.main.temp}°C</p>
                    <p>Weather:{result.weather.main } </p> */}
                </div>
            </div>
        </>
    )
}
