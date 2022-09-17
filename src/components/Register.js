import React, { useState } from "react"
import axios from 'axios'

export default function Register(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRep, setPasswordRep] = useState('')

    const registerUser = async () => {
        const dataJson = JSON.stringify({
            username: username,
            password: password
        })
        try {
            const res = await axios.post((process.env.baseURL || "http://localhost:3001") + '/api/register', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                document.getElementById("email").value = ""
                document.getElementById("password").value = ""
                document.getElementById("passwordRepeat").value = ""
                alert("Registration successful. You can proceed to the Log in panel.")
                props.closeRegisterModal()
            }

        }
        catch (err) {
            document.getElementById("email").value = ""
            document.getElementById("password").value = ""
            document.getElementById("passwordRepeat").value = ""
            alert("Nickname already exist!")
        }
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
        }
    }

    return (
        <form className="form" autoComplete="off" onSubmit={handleSubmit} >
            <p className="title">Stwórz konto</p>
            <input id="email" type="input" className="input" placeholder="Email" role="presentation" autoComplete="off" onChange={(e) => { setUsername(e.target.value) }} required />
            <br />
            <input id="password" className="input" type="password" placeholder="Hasło" onChange={(e) => { setPassword(e.target.value) }} required />
            <br />
            <input id="passwordRepeat" className="input" type="password" placeholder="Powtórz hasło" onChange={(e) => { setPasswordRep(e.target.value) }} required />
            <button id="register" type="text" className="submit">
                Rejestruj
            </button>
        </form>
    )
}
