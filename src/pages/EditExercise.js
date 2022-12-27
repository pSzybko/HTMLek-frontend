import React, { useState, useEffect } from 'react'

import axios from 'axios'
import * as BiIcons from 'react-icons/bi'

export default function EditExercise({ getTasks, tasks }) {
    const [showMore, setShowMore] = useState(false)

    const [task, setTask] = useState({ exercises: [] })
    const [exercise, setExercise] = useState('')
    const [exerciseId, setExerciseId] = useState('')
    const [exerciseTitleInput, setExerciseTitleInput] = useState('')


    const [title, setTitle] = useState('')
    const [exerciseTitle, setExerciseTitle] = useState('')
    const [exerciseDescription, setExerciseDescription] = useState('')
    const [exerciseSolutionCode, setExerciseSolutionCode] = useState('')
    const [exerciseStartingHTMLCode, setExerciseStartingHTMLCode] = useState('')
    const [exerciseStartingCSSCode, setExerciseStartingCSSCode] = useState('')

    useEffect(() => {
        getTasks()
    }, [])

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

    const loadMore = async (value) => {
        setShowMore(value !== '' && task.exercises.length !== 0)
        setExerciseId(value)
        try {
            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/exercise/' + task._id + '/' + value)
            if (res.data.status === 'ok') {
                setExercise(res.data.exercise)
                setExerciseTitle(res.data.exercise.exerciseTitle)
                setExerciseDescription(res.data.exercise.exerciseDescription)
                setExerciseSolutionCode(res.data.exercise.exerciseSolutionCode)
                setExerciseStartingHTMLCode(res.data.exercise.exerciseStartingHTMLCode)
                setExerciseStartingCSSCode(res.data.exercise.exerciseStartingCSSCode)
            } else {
                console.log('Can not find exercise.')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const updateExercise = async () => {
        if (exercise.exerciseTitle !== exerciseTitleInput) {
            alert('Wpisz poprawną nazwę zadania!')
            return
        }
        const token = localStorage.getItem('token')
        const dataJson = JSON.stringify({
            title: title,
            _id: exerciseId,
            exerciseTitle: exerciseTitle,
            exerciseDescription: exerciseDescription,
            exerciseSolutionCode: exerciseSolutionCode,
            exerciseStartingHTMLCode: exerciseStartingHTMLCode,
            exerciseStartingCSSCode: exerciseStartingCSSCode,
            token: token
        })
        try {
            const res = await axios.put((process.env.baseURL || 'http://localhost:3001') + '/api/exercise', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                alert('Pomyślnie edytowano lekcję!')
            }
            else {
                alert('Nie udało się edytować lekcji')
            }
        } catch (err) {
            console.log(err)

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExercise()
    }

    return (
        <div className='myTab'>
            <h2>
                Edytuj wskazane zadanie
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Wybierz lekcję:
                    <select onChange={(e) => {
                        setTitle(e.target.value)
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
                    Wybierz zadanie do edycji:
                    <select onChange={(e) => { loadMore(e.target.value) }} required>
                        <option value=''>---wybierz zadanie---</option>
                        {
                            task.exercises.map((task, index) => (
                                <option key={index} value={task._id}>{task.exerciseTitle}</option>
                            ))
                        }
                    </select>
                </label>
                {showMore &&
                    <>
                        <label>
                            Nazwa zadania:
                            <input type='text' defaultValue={exercise.exerciseTitle} autoComplete='off' placeholder='Nazwa zadania' onChange={(e) => { setExerciseTitle(e.target.value) }} required />
                        </label>
                        <label>
                            Opis zadania:
                            <textarea type='text' defaultValue={exercise.exerciseDescription} autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseDescription(e.target.value) }} required />
                        </label>
                        <label>
                            Rozwiązanie zadania:
                            <textarea type='text' defaultValue={exercise.exerciseSolutionCode} autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseSolutionCode(e.target.value) }} required />
                        </label>
                        <label>
                            Początkowy kod HTML zadania:
                            <textarea type='text' defaultValue={exercise.exerciseStartingHTMLCode} autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseStartingHTMLCode(e.target.value) }} required />
                        </label>
                        <label>
                            Początkowy kod CSS zadania:
                            <textarea type='text' defaultValue={exercise.exerciseStartingCSSCode} autoComplete='off' placeholder='Opis zadania' onChange={(e) => { setExerciseStartingCSSCode(e.target.value) }} required />
                        </label>
                        <label>
                            Aby usunąć wskazane zadanie napisz poniżej jego dokładną nazwę
                            <input type='text' autoComplete='off' placeholder='Nazwa lekcji' onChange={(e) => { setExerciseTitleInput(e.target.value) }} required />
                        </label>
                        <button type='submit'>
                            <BiIcons.BiSave />
                        </button>
                    </>
                }
            </form>
        </div>
    )
}
