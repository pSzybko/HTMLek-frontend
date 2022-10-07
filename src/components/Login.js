import React, { useEffect, useState, useContext } from "react"
import './Login.css'
import axios from 'axios'

export default function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const logInUser = async () => {
        const dataJson = JSON.stringify({
            username: username,
            password: password
        })
        try {
            const res = await axios.post((process.env.baseURL || "http://localhost:3001") + '/api/login', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })

            if (res) {
                // alert(res.data.token)
                localStorage.setItem('token', res.data.token)
                props.changeAuth()
                props.setUsername(username)
                props.closeLoginModal()
            }
        }
        catch (err) { alert("Wrong login or password!") }
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
        <form className="form" onSubmit={handleSubmit}>
            <div className="title">Hello!</div>
            <div className="subtitle">Sign in to your account</div>
            <div className="input-container ic1">
                <input id="email" className="input" type="text" placeholder=" " role="presentation" autoComplete="off" onChange={(e) => { setUsername(e.target.value) }} required />
                <div className="cut cut-short"></div>
                <label htmlFor="emailLog" className="placeholder">
                    Email
                </label>
            </div>
            <div className="input-container ic2">
                <input id="passwordLog" className="input" type="password" placeholder=" " autoComplete="off" onChange={(e) => { setPassword(e.target.value) }} />
                <div className="cut"></div>
                <label htmlFor="passwordLog" className="placeholder">
                    Password
                </label>
            </div>
            <button type="submit" id="login" className="submit">
                Log in
            </button>
            <p>Jesteś tutaj po raz pierwszy? </p>
            <button type="button" onClick={handleRegister}>
                Zarejestruj się
            </button>
        </form>
    )
}