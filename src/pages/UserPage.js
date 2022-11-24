import React, { useState, useEffect } from 'react'

import jwtDecode from 'jwt-decode'

import Tasks from '../components/Tasks'
import StickyBar from '../components/StickyBar'
import './UserPage.css'

export default function UserPage(props) {
    const [username, setUsername] = useState('')

    const token = localStorage.getItem('token')
    const user = jwtDecode(token)

    useEffect(() => {
        setUsername(user.username)
    }, [setUsername, user])

    const customGreetings = ['Witaj ponownie ' + username, 'Dobrze Cię znowu widzieć ' + username, 'Nad czym dzisiaj będziesz pracować?']

    return (
        <div className='userPage'>
            <div className='menu'>
                <StickyBar username={username} logOut={props.logOut} />
            </div>
            <div className='userHeaderWrapper'>
                <h1 className='userHeader'>{customGreetings[Math.floor(Math.random() * customGreetings.length)]}</h1>
            </div>
            <Tasks />
        </div>
    )
}
