import React, { useState, useEffect } from 'react'

import axios from 'axios'
import * as BiIcons from 'react-icons/bi'

export default function AddExercise({ getTasks, tasks }) {
    const [title, setTitle] = useState('')
    const [exerciseTitle, setExerciseTitle] = useState('')
    const [exerciseDescription, setExerciseDescription] = useState('')
    const [exerciseSolutionCode, setExerciseSolutionCode] = useState('')
    const [exerciseStartingHTMLCode, setExerciseStartingHTMLCode] = useState('')
    const [exerciseStartingCSSCode, setExerciseStartingCSSCode] = useState('')

    useEffect(() => {
        getTasks()
    }, [])

    const addExercise = async () => {
        const token = localStorage.getItem('token')

        const dataJson = JSON.stringify({
            title: title,
            exerciseTitle: exerciseTitle,
            exerciseDescription: exerciseDescription,
            exerciseSolutionCode: exerciseSolutionCode,
            exerciseStartingHTMLCode: exerciseStartingHTMLCode,
            exerciseStartingCSSCode: exerciseStartingCSSCode,
            token: token
        })
        try {
            const res = await axios.post((process.env.REACT_APP_BASE_URL || 'http://localhost:3001') + '/api/exercise', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                alert('Pomyślnie dodano zadanie.')
            }
            else {
                alert('Nie udało się dodać zadania.')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addExercise()
    }

    return (
        <div className='myTab'>
            <div className='myTabHeader'>
                <h2>Dodaj nowe zadanie</h2>
            </div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>
                    Wybierz lekcję:
                    <select onChange={(e) => { setTitle(e.target.value) }} required>
                        <option value=''>---wybierz lekcję---</option>
                        {
                            tasks.map((task, index) => (
                                <option key={index}>{task.title}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    Nazwa zadania:
                    <input type='text' autoComplete='off' placeholder='Nazwa zadania' onChange={(e) => { setExerciseTitle(e.target.value) }} required />
                </label>
                <label>
                    Opis zadania:
                    <textarea type='text' autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseDescription(e.target.value) }} required />
                </label>
                <label>
                    Rozwiązanie zadania:
                    <textarea type='text' autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseSolutionCode(e.target.value) }} required />
                </label>
                <label>
                    Początkowy kod HTML zadania:
                    <textarea type='text' autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseStartingHTMLCode(e.target.value) }} required />
                </label>
                <label>
                    Początkowy kod CSS zadania:
                    <textarea type='text' autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseStartingCSSCode(e.target.value) }} required />
                </label>
                <button type='submit'>
                    <BiIcons.BiSave />
                </button>
            </form>
        </div>
    )
}
