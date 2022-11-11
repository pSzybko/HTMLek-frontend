import React, { useState, useEffect } from 'react'

import Tasks from '../components/Tasks'
import StickyBar from '../components/StickyBar'
import './UserPage.css'

export default function UserPage(props) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [setUsername])

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
