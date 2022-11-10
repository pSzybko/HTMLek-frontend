import React, { useState } from 'react'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"

import './StickyBar.css'

export default function StickyBar(props) {
    const [ShowMore, setShowMore] = useState(false)

    return (
        <div className='taskbarWrapper'>
            <IconContext.Provider value={{ color: 'black', size: '38px' }}>
                <ul className='sticky-menu-items'>
                    <li className='logoWrapper'>
                        <h3 className='taskbarTitle'>&lt;<strong className='myStrong'>p</strong>&gt;HTMLek&lt;/<strong className='myStrong'>p</strong>&gt;</h3>
                    </li>
                    <li className='barLogoutWrapper'>
                        <div className='userBar barLogoutItem' onMouseEnter={() => { setShowMore(true) }} onMouseLeave={() => { setShowMore(false) }}>
                            <div className='textArea'>
                                <BiIcons.BiUserCircle className='userIcon' />{props.username}
                                {
                                    ShowMore && (
                                        <BiIcons.BiLogOut className='logoutUserIcon' onClick={props.logOut} />
                                    )
                                }
                            </div>
                        </div>
                    </li>
                </ul>
            </IconContext.Provider>
        </div >
    )
}
