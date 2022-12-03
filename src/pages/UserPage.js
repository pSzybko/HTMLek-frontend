import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import jwtDecode from 'jwt-decode'

import Tasks from '../components/Tasks'
import StickyBar from '../components/StickyBar'
import './UserPage.css'

export default function UserPage() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
            window.location.reload(false)
        }
        const user = jwtDecode(token)
        if (user.role === 'admin') {
            navigate('/admin')
        }
        setUsername(user.username)
    }, [setUsername, navigate])

    const customGreetings = ['Witaj ponownie ' + username, 'Dobrze Cię znowu widzieć ' + username, 'Nad czym dzisiaj będziesz pracować?']

    return (
        <div className='userPage'>
            <div className='menu'>
                <StickyBar username={username} page={'user'} />
            </div>
            <div className='userHeaderWrapper'>
                <h1 className='userHeader'>{customGreetings[Math.floor(Math.random() * customGreetings.length)]}</h1>
            </div>
            <Tasks />
        </div>
    )
}
