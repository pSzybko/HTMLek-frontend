import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'

import './StickyBar.css'

export default function StickyBar({ username, page }) {
    const navigate = useNavigate()

    const [ShowMore, setShowMore] = useState(false)

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className='taskbarWrapper'>
            <IconContext.Provider value={{ color: 'black', size: '38px' }}>
                <ul className='sticky-menu-items'>
                    <li className='logoWrapper'>
                        <h3 className='taskbarTitle'>&lt;<strong className='myStrong'>p</strong>&gt;HTMLek&lt;/<strong className='myStrong'>p</strong>&gt;</h3>
                    </li>
                    {page === 'admin' &&
                        <li className='adminPanel'>
                            <h3 className='taskbarTitle'>Panel administratora</h3>
                        </li>
                    }
                    <li className='barLogoutWrapper'>
                        <div className='userBar barLogoutItem' onMouseEnter={() => { setShowMore(true) }} onMouseLeave={() => { setShowMore(false) }}>
                            <div className='textArea'>
                                <BiIcons.BiUserCircle className='userIcon' />{username}
                                {
                                    ShowMore && (
                                        <BiIcons.BiLogOut className='logoutUserIcon' onClick={logOut} />
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
