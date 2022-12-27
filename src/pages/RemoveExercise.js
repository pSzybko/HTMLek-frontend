import React, { useState, useEffect } from 'react'

import axios from 'axios'
import * as BiIcons from 'react-icons/bi'

export default function RemoveExercise({ getTasks, tasks }) {
    const [task, setTask] = useState({ exercises: [] })
    const [exerciseTitle, setExerciseTitle] = useState('')
    const [exerciseTitleInput, setExerciseTitleInput] = useState('')

    useEffect(() => {
        getTasks()
    }, [])

    const removeExercise = async () => {
        if (exerciseTitle !== exerciseTitleInput) {
            alert('Wpisz poprawną nazwę zadania!')
            return
        }
        const token = localStorage.getItem('token')
        try {
            const res = await axios.delete((process.env.baseURL || 'http://localhost:3001') + '/api/exercise/' + task.title + '/' + exerciseTitle + '/' + token)
            if (res.data.status === 'ok') {
                alert('Pomyślnie usunięto zadanie.')
            }
            else {
                alert('Nie udało się usunąć zadania.')
            }
            window.location.reload(false)

        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        removeExercise()
    }

    const getTask = async (name) => {
        try {
            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/lesson/' + name)
            if (res.data.status === 'ok') {
                setTask(res.data.lesson)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='myTab'>
            <h2>
                Usuń pojedyncze zadanie
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Wybierz lekcję do usunięcia:
                    <select onChange={(e) => {
                        e.target.value !== '' ? getTask(e.target.value) : setTask({ exercises: [] })
                    }} required>
                        <option value=''>---wybierz lekcję---</option>
                        {
                            tasks.map((task, index) => (
                                <option key={index} value={task.title}>{task.title}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    Wybierz zadanie do usunięcia:
                    <select onChange={(e) => { setExerciseTitle(e.target.value) }} required>
                        <option value=''>---wybierz zadanie---</option>
                        {
                            task.exercises.map((task, index) => (
                                <option key={index} value={task.exerciseTitle}>{task.exerciseTitle}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    Aby usunąć wskazane zadanie napisz poniżej jego dokładną nazwę
                    <input type='text' autoComplete='off' placeholder='Nazwa lekcji' onChange={(e) => { setExerciseTitleInput(e.target.value) }} required />
                </label>
                <button type='submit'>
                    <BiIcons.BiSave />
                </button>
            </form>
        </div >
    )
}
