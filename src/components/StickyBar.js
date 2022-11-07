import React from 'react'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"

import './StickyBar.css'

export default function StickyBar(props) {
    return (
        <div className='taskbarWrapper'>
            <ul className='sticky-menu-items'>
                <li className='logoWrapper'>
                    <h3 className='taskbarTitle'>&lt;<strong className='myStrong'>p</strong>&gt;HTMLek&lt;/<strong className='myStrong'>p</strong>&gt;</h3>
                </li>
                <li className='logoutWrapper'>
                    <IconContext.Provider value={{ color: 'black', size: '40px' }}>
                        <button onClick={props.logOut}>{<BiIcons.BiLogOut />}</button>
                    </IconContext.Provider>
                </li>
            </ul>
        </div>
    )
}
