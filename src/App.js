// lekcja{
// tytuł: Lekcja 1,
// opis: xxxxxxxxxx,
// zadania_tytuł: [zad1, zad2, zad3],
// zadania_tresc: [xxx, xxx, xxx],
// }

import './App.css'

import React, { useState } from 'react'
import { IconContext } from "react-icons"
import MenuBar from './components/MenuBar'
import Modal from 'react-modal'

import Login from './components/Login'
import Tasks from './components/Tasks'
import Register from './components/Register'
import { modalStyle } from './components/ModalStyle'
import Home from './pages/Home'
import About from './pages/About'

function App() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)
    const [auth, setAuth] = useState(false)

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
    return (
        <div>
            <div className='menu'>
                <IconContext.Provider value={{ color: "#15172b", size: "50px" }}>
                    {!auth ? (
                        <MenuBar openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} />
                    )
                        :
                        (
                            <p>wrr</p>
                        )
                    }
                </IconContext.Provider>
                <Modal
                    ariaHideApp={false}
                    style={modalStyle}
                    isOpen={showLoginModal}
                    onRequestClose={closeLoginModal
                    }
                >
                    <Login auth={auth} closeLoginModal={closeLoginModal} changeAuth={changeAuth} />
                </Modal>
                <Modal
                    ariaHideApp={false}
                    style={modalStyle}
                    isOpen={showRegisterModal}
                    onRequestClose={closeRegisterModal}
                >
                    <Register closeRegisterModal={closeRegisterModal} />
                </Modal>
            </div>
            <Home />
            <About />
            <Tasks />
        </div>
    )
}

export default App