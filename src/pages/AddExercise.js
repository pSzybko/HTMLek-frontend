import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function AddExercise(props) {
    const [title, setTitle] = useState('')
    const [exerciseTitle, setExerciseTitle] = useState('')
    const [exerciseDescription, setExerciseDescription] = useState('')
    const [exerciseSolutionCode, setExerciseSolutionCode] = useState('')
    const [exerciseStartingHTMLCode, setExerciseStartingHTMLCode] = useState('')
    const [exerciseStartingCSSCode, setExerciseStartingCSSCode] = useState('')

    useEffect(() => {
        props.getTasks()
    }, [])

    const addExercise = async () => {
        const dataJson = JSON.stringify({
            title: title,
            exerciseTitle: exerciseTitle,
            exerciseDescription: exerciseDescription,
            exerciseSolutionCode: exerciseSolutionCode,
            exerciseStartingHTMLCode: exerciseStartingHTMLCode,
            exerciseStartingCSSCode: exerciseStartingCSSCode
        })
        try {
            const res = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/exercise', dataJson, {
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
        <div>
            <h2>Dodaj nowe zadanie</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>
                    Wybierz lekcję:
                    <select onChange={(e) => { setTitle(e.target.value) }} required>
                        <option value=''>---wybierz lekcję---</option>
                        {
                            props.tasks.map((task, index) => (
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
                    Dodaj
                </button>
            </form>
        </div>
    )
}
