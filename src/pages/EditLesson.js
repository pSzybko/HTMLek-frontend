import React, { useState, useEffect } from 'react'

import axios from 'axios'
import * as BiIcons from 'react-icons/bi'

export default function EditLesson({ getTasks, tasks }) {
    const [showMore, setShowMore] = useState(false)
    const [Task, setTask] = useState({ title: '', description: '' })

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [TaskName, setTaskName] = useState('')

    useEffect(() => {
        getTasks()
    }, [])

    const getTaskData = async (value) => {
        if (value === '') {
            setTask({ title: '', description: '' })
            return
        }
        const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/lesson/' + value)
        if (res.data.status !== 'ok') {
            setTask({ title: '', description: '' })
            return
        }
        setTask(res.data.lesson)
        setTitle(res.data.lesson.title)
        setDescription(res.data.lesson.description)
    }

    const loadMore = (value) => {
        setShowMore(value !== '')
        getTaskData(value)
    }

    const updateTask = async () => {
        const token = localStorage.getItem('token')

        const dataJson = JSON.stringify({
            _id: Task._id,
            title: Title,
            description: Description,
            token: token
        })
        if (Task.title !== TaskName) {
            alert('Wpisz poprawną nazwę lekcji!')
            return
        }
        try {
            const res = await axios.put((process.env.baseURL || 'http://localhost:3001') + '/api/lesson', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                alert('Pomyślnie edytowano lekcję.')
            }
            else {
                alert('Nie udało się edytwoać lekcji.')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTask()
    }

    return (
        <div className='myTab'>
            <h2>
                Wybierz lekcję do edycji
            </h2>
            <form autoComplete='off' onSubmit={handleSubmit}>

                <label>
                    Wybierz lekcję do edycji:
                    <select onChange={(e) => { loadMore(e.target.value) }}>
                        <option value=''>---wybierz lekcję---</option>
                        {
                            tasks.map((task, index) => (
                                <option key={index} value={task.title}>{task.title}</option>
                            ))
                        }
                    </select>
                </label>

                {showMore &&
                    <>
                        <label>
                            Nazwa lekcji:
                            <input type='text' defaultValue={Task.title} autoComplete='off' placeholder='Nazwa lekcji' onChange={(e) => { setTitle(e.target.value) }} required />
                        </label>
                        <label>
                            Opis lekcji:
                            <textarea autoComplete='off' defaultValue={Task.description} placeholder='Opis lekcji' onChange={(e) => { setDescription(e.target.value) }} required />
                        </label>
                        <label>
                            Aby edytować wskazaną lekcję napisz poniżej jej dokładną nazwę
                            <input type='text' autoComplete='off' placeholder='Nazwa lekcji' onChange={(e) => { setTaskName(e.target.value) }} required />
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
