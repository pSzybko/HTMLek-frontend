import React, { useState } from 'react'

import axios from 'axios'
import * as BiIcons from 'react-icons/bi'


export default function AddLesson() {

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    const addNewLesson = async () => {
        const token = localStorage.getItem('token')

        const dataJson = JSON.stringify({
            title: Title,
            description: Description,
            exercises: [],
            token: token
        })
        try {
            const res = await axios.post((process.env.REACT_APP_BASE_URL || 'http://localhost:3001') + '/api/lesson', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })

            if (res.data.status === 'ok') {
                alert('Pomyślnie dodano lekcję.')
            }
            else {
                alert('Nie udało się dodać lekcji.')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewLesson()
    }

    return (
        <div className='myTab'>
            <div className='myTabHeader'>
                <h2>Dodaj nową lekcję</h2>
            </div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>
                    Nazwa lekcji:
                    <input type='text' autoComplete='off' placeholder='Nazwa lekcji' onChange={(e) => { setTitle(e.target.value) }} required />
                </label>
                <label>
                    Opis lekcji:
                    <textarea autoComplete='off' placeholder='Opis lekcji' onChange={(e) => { setDescription(e.target.value) }} required />
                </label>
                <button type='submit'>
                    <BiIcons.BiSave />
                </button>
            </form>
        </div >
    )
}
