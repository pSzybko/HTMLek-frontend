import React, { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRep, setPasswordRep] = useState('')

    const registerUser = async () => {

    }

    const createUserData = async () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordRep) {
            document.getElementById("password").value = ""
            document.getElementById("passwordRepeat").value = ""
            alert('Passwords do not match!')
        }
        else {
            registerUser()
            createUserData()
        }
    }

    return (
        <form className="form" autoComplete="off" onSubmit={handleSubmit} >
            <p className="title">Stwórz konto</p>
            <input id="email" type="input" className="input" placeholder="Email" role="presentation" autoComplete="off" onChange={(e) => { setUsername(e.target.value) }} />
            <input id="password" className="input" type="password" placeholder="Hasło" onChange={(e) => { setPassword(e.target.value) }} />
            <input id="passwordRepeat" className="input" type="password" placeholder="Powtórz hasło" onChange={(e) => { setPasswordRep(e.target.value) }} />
            <button id="register" type="text" className="submit">
                Rejestruj
            </button>
        </form>
    )
}
