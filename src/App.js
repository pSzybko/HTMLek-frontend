import './App.css'

import { useState } from 'react'
import { IconContext } from "react-icons"
import MenuBar from './components/MenuBar'
import Modal from 'react-modal'

import Login from './components/Login'
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
        setShowLoginModal(true)
    }

    const openRegisterModal = () => {
        setShowRegisterModal(true)
    }

    const closeLoginModal = () => {
        setShowLoginModal(false)
    }

    const closeRegisterModal = () => {
        setShowRegisterModal(false)
    }

    const changeAuth = () => {
        setAuth(!auth)
    }
    return (
        <>
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
                    <Register />
                </Modal>
            </div>
            <Home />
            <About />
        </>
    )
}

export default App