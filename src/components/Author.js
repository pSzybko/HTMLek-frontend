import React from 'react'
import { IconContext } from "react-icons"
import * as CgIcons from "react-icons/cg"
import * as BiIcons from "react-icons/bi"
import * as FiIcons from "react-icons/fi"
import './Author.css'

export default function Author() {
    return (
        <div className='author-wrapper'>
            <div className='author'>
                <div className='author-text'>
                    <div className='portada'></div>
                    <div className='title-wrapper'>
                        <div className='title'>O autorze</div>
                        <h3 className='author-credentials'>Paweł Sipko</h3>
                    </div>
                    <div className='author-content'>
                        Jestem studentem Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie.
                    </div>
                    <IconContext.Provider value={{ color: "#453F3C", size: "40px" }}>
                        <div className='links'>
                            <a className='socials-link' href='https://github.com/pSzybko' target='_blank'>{<FiIcons.FiGithub />}</a>
                            <a className='socials-link' href='https://www.linkedin.com/in/pawe%C5%82-sipko-003b58232/' target='_blank'>{<FiIcons.FiLinkedin />}</a>
                            <a className='socials-link' href="mailto:example@example.com" target='_top'>{<FiIcons.FiMail />}</a>{/* TODO */}
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}
