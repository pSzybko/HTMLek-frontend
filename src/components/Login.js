import React, { useState } from 'react'

import axios from 'axios'

import './Modal.css'

export default function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const logInUser = async () => {
        const dataJson = JSON.stringify({
            username: username,
            password: password
        })
        try {
            const res = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/login', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })

            if (res) {
                localStorage.setItem('token', res.data.token)
                props.changeAuth()
                props.closeLoginModal()
                props.setIsAdmin(res.data.user.role === 'admin')
            }
        }
        catch (err) { alert('Wrong login or password!') }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        logInUser()
    }

    const handleRegister = (e) => {
        e.preventDefault()
        props.closeLoginModal()
        props.openRegisterModal()
    }

    return (
        <div className='modal'>
            <form className='form' autoComplete='off' onSubmit={handleSubmit}>
                <div className='title'>Witaj!</div>
                <div className='subtitle'>Zaloguj się</div>
                <div className='input-container'>
                    <input id='nickname' className='input' type='text' placeholder='Nazwa użytkownika' autoComplete='off' onChange={(e) => { setUsername(e.target.value) }} required />
                    <input id='password' className='input' type='password' placeholder='Hasło' autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} required />
                </div>
                <div className='spacing'></div>
                <button type='submit' className='modalButton'>
                    Zaloguj
                </button>
                <div className='redirectLink'>
                    <p>Jesteś tutaj po raz pierwszy?</p>
                    <button type='button' onClick={handleRegister} className='modalButton'>
                        Zarejestruj się
                    </button>
                </div>
            </form>
        </div>
    )
}