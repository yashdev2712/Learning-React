import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Result from './Components/Result';


function App() {
  const [result, setResult] = useState(null);
  const [location, setLocation] = useState("prayagraj");

  useEffect(() => {
    const fetchData = async (location) => {
      try {
        if (!location) return;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={964c4eea690bebe46fbbb5577f75a268}`)
        const data = await response.json();
        if (data) {
          setResult(data);
          console.log(result);
        } else {
          throw new Error("network issue")
        }
      }
      catch (err) {
        console.log(err.message);
      }
    }
    fetchData(location);
  }, [location])

  return (
    <>
      <Navbar location={location} setLocation={setLocation} />
      <Result result={result} />
    </>
  )
}

export default App