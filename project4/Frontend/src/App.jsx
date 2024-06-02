import React from 'react'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import { Route, Routes } from "react-router-dom"
import Protected from '../components/Protected'
import Message from '../components/Message/Message'

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='message' element={<Protected>
          <Message />
        </Protected>} />
      </Routes >

    </>
  )
}

export default App