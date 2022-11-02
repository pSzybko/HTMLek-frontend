import React, { useState, useEffect } from 'react'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"
import { Link } from "react-router-dom"

import Tasks from '../components/Tasks'
import './UserPage.css'

export default function UserPage(props) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [setUsername])

    const customGreetings = ['Witaj ponownie ' + username, 'Dobrze Cię znowu widzieć ' + username, 'Nad czym dzisiaj będziesz pracować?']

    return (
        <div className='userPage'>
            <div className='userHeaderWrapper'>
                <h1 className='userHeader'>{customGreetings[Math.floor(Math.random() * customGreetings.length)]}</h1>
                <IconContext.Provider value={{ color: '#453F3C', size: '40px' }}>
                    <button onClick={props.logOut}>{<BiIcons.BiLogOut />}</button>
                </IconContext.Provider>
                <Link className='myLink' to='/sandbox' >
                    tryb Sandbox
                </Link>
            </div>
            <Tasks />
        </div>
    )
}
