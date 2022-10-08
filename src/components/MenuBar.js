import React from "react"
import { IconContext } from "react-icons"
import { ManuBarElements } from "./MenuBarElements"
import * as BiIcons from "react-icons/bi"
import * as FiIcons from "react-icons/fi"
import * as Scroll from 'react-scroll'
import './MenuBar.css'

export default function MenuBar({ openRegisterModal, openLoginModal }) {
    return (
        <div className="taskbarWrapper">
            <IconContext.Provider value={{ color: "#453F3C", size: "40px" }}>
                <nav className={"nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className='button' onClick={openRegisterModal}><BiIcons.BiLogIn /><br />zarejestruj się</li>
                        <li className='button' onClick={openLoginModal}><FiIcons.FiLogIn /><br />zaloguj się</li>

                        {ManuBarElements.map((element, index) => {
                            return (
                                <li key={index} className='button'>
                                    <Scroll.Link key={index} to={element.path} spy={true} smooth={true} offset={-80} duration={500}>
                                        <div className='clickable'>
                                            {element.icon}<br />{element.description}
                                        </div>
                                    </Scroll.Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div >
    )
}