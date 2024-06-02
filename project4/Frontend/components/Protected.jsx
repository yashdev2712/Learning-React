import React from 'react'
import { Navigate } from 'react-router-dom';


function Protected({ children }) {

    const token = localStorage.getItem("authToken");
    if (!token) {
        return (
            <>
                <Navigate to="/login" replace />
            </>
        )
    }
    return children;
}

export default Protected