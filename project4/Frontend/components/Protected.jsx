import React from 'react'
import { Navigate } from 'react-router-dom';


function Protected({ childeren }) {

    const token = localStorage.getItem("authToken");
    if (!token) {
        return (
            <>
                <Navigate to="/login" replace />
            </>
        )
    }
    return childeren;
}

export default Protected