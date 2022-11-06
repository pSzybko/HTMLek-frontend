import React, { useState, useEffect } from 'react'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"

import Tasks from '../components/Tasks'
import './UserPage.css'
import '../components/StickyBar'
import StickyBar from '../components/StickyBar'

export default function UserPage(props) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [setUsername])

    const customGreetings = ['Witaj ponownie ' + username, 'Dobrze Cię znowu widzieć ' + username, 'Nad czym dzisiaj będziesz pracować?']

    return (
        <div className='userPage'>
            <div className='menu'>
                <StickyBar logOut={props.logOut} />
            </div>
            <div className='userHeaderWrapper'>
                <h1 className='userHeader'>{customGreetings[Math.floor(Math.random() * customGreetings.length)]}</h1>
            </div>
            <Tasks />
        </div>
    )
}
