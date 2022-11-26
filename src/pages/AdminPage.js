import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Route, Routes, BrowserRouter } from 'react-router-dom'

import jwtDecode from 'jwt-decode'

import './AdminPage.css'

export default function AdminPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
            window.location.reload(false)
        }
        const user = jwtDecode(token)
        if (user.role !== 'admin') {
            navigate('/home')
        }
    })

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className='AdminPageHome'>
            <div>
                HTMLek Panel Administratora
            </div>
            <div className='AdminMenu'>
                <button>Dodaj zadanie</button>
                <button>Usun zadanie</button>
                <button>Edytuj zadanie</button>
                <button onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}
