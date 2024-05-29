import React from 'react'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import { Route, Routes } from "react-router-dom"
import Messanger from '../components/Messanger.jsx/Messanger'
import Protected from '../components/Protected'

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='message' element={<Protected>
          <Messanger />
        </Protected>} />
      </Routes >

    </>
  )
}

export default App