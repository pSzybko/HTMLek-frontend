import React, { useState } from 'react'
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
            const res = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/register', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                document.getElementById('nickname').value = ''
                document.getElementById('password').value = ''
                document.getElementById('passwordRepeat').value = ''
                alert('Udało się stworzyć konto. Teraz możesz się zalogować.')
                props.closeRegisterModal()
            }

        }
        catch (err) {
            document.getElementById('nickname').value = ''
            document.getElementById('password').value = ''
            document.getElementById('passwordRepeat').value = ''
            alert('Podany nickname już istnieje!')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordRep) {
            document.getElementById('password').value = ''
            document.getElementById('passwordRepeat').value = ''
            alert('Hasła nie są jednakowe!')
        }
        else {
            registerUser()
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        props.closeRegisterModal()
        props.openLoginModal()
    }

    return (
        <div className='modal'>
            <form className='form' autoComplete='off' onSubmit={handleSubmit} >
                <div className='title'>Witaj!</div>
                <div className='subtitle'>Załóż konto</div>
                <div className='input-container'>
                    <input id='nickname' className='input' type='input' placeholder='Nazwa użytkownika' role='presentation' autoComplete='off' onChange={(e) => { setUsername(e.target.value) }} required />
                    <input id='password' className='input' type='password' placeholder='Hasło' onChange={(e) => { setPassword(e.target.value) }} required />
                    <input id='passwordRepeat' className='input' type='password' placeholder='Powtórz hasło' onChange={(e) => { setPasswordRep(e.target.value) }} required />
                </div>
                <button id='register' type='submit' className='modalButton'>
                    Rejestruj
                </button>
                <div className='redirectLink'>
                    <p>Masz już konto?</p>
                    <button type='button' onClick={handleLogin} className='modalButton'>
                        Zaloguj się
                    </button>
                </div>
            </form>
        </div>
    )
}
