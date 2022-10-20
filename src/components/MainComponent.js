import React, { useState, useEffect } from 'react'
import { IconContext } from "react-icons"
import MenuBar from './MenuBar'
import Modal from 'react-modal'


import Login from './Login'
import Tasks from './Tasks'
import Register from './Register'
import Author from './Author'
import { modalStyle } from './ModalStyle'
import Home from '../pages/Home'
import About from '../pages/About'
import jwtDecode from 'jwt-decode'

export default function MainComponent() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)
    const [auth, setAuth] = useState(false)
    const [username, setUsername] = useState() // TODO

    window.onbeforeunload = function () {
        window.scrollTo(0, 0)
    }
    const openLoginModal = () => {
        document.body.style.overflow = 'hidden'
        setShowLoginModal(true)
    }

    const openRegisterModal = () => {
        document.body.style.overflow = 'hidden'
        setShowRegisterModal(true)
    }

    const closeLoginModal = () => {
        document.body.style.overflow = 'unset'
        setShowLoginModal(false)
    }

    const closeRegisterModal = () => {
        document.body.style.overflow = 'unset'
        setShowRegisterModal(false)
    }

    const changeAuth = () => {
        setAuth(!auth)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setAuth(false)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                setAuth(false)
            } else {
                setAuth(true)
            }
        }
    }, [])
    return (
        <>
            {!auth ? (
                <div>
                    <div className='menu'>
                        <IconContext.Provider value={{ color: "#15172b", size: "50px" }}>
                            <MenuBar openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} />
                        </IconContext.Provider>
                        <Modal
                            ariaHideApp={false}
                            style={modalStyle}
                            isOpen={showLoginModal}
                            onRequestClose={closeLoginModal
                            }
                        >
                            <Login auth={auth} closeLoginModal={closeLoginModal} openRegisterModal={openRegisterModal} changeAuth={changeAuth} setUsername={setUsername} />
                        </Modal>
                        <Modal
                            ariaHideApp={false}
                            style={modalStyle}
                            isOpen={showRegisterModal}
                            onRequestClose={closeRegisterModal}
                        >
                            <Register closeRegisterModal={closeRegisterModal} openLoginModal={openLoginModal} />
                        </Modal>
                    </div>
                    <Home />
                    <About />
                    <Author />
                </div>
            )
                :
                (
                    <>
                        <p>Witaj ponownie {username} </p>
                        <button onClick={logOut}>Wyloguj</button>
                        <Tasks />
                    </>
                )
            }
        </>
    )
}
