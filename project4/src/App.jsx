import React from 'react'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp/>}/>
    </Routes >

    </>
  )
}

export default App