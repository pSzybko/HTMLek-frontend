import React, { useState, useEffect } from 'react'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"

import Tasks from '../components/Tasks'
import './UserPage.css'

export default function UserPage(props) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [setUsername])

    return (
        <div className='userPage'>
            <div className='userHeaderWrapper'>
                <h1 className='userHeader'>Witaj ponownie {username}</h1>
                <IconContext.Provider value={{ color: '#453F3C', size: '40px' }}>
                    <button onClick={props.logOut}>{<BiIcons.BiLogOut />}</button>
                </IconContext.Provider>

            </div>
            <Tasks />
        </div>
    )
}
