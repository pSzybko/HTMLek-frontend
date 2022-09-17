import React, { useEffect, useState, useContext } from "react"
import './Login.css'

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dummyFunction = (e) => {
        e.preventDefault()
        props.changeAuth()
        props.closeLoginModal()
        console.log(props.auth)
    }

    return (
        <form className="form" onSubmit={dummyFunction}>
            <div className="title">Hello!</div>
            <div className="subtitle">Sign in to your account</div>
            <div className="input-container ic1">
                <input id="email" className="input" type="email" placeholder=" " role="presentation" autoComplete="off" onChange={(e) => { setUsername(e.target.value) }} />
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
            <button id="login" type="text" className="submit">
                Log in
            </button>
        </form>
    )
}