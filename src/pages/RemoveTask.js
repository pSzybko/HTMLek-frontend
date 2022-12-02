import React, { useState, useEffect } from 'react'

import axios from 'axios'
import * as BiIcons from 'react-icons/bi'

export default function RemoveTask(props) {
    const [Task, setTask] = useState('')
    const [TaskName, setTaskName] = useState('')

    useEffect(() => {
        props.getTasks()
    }, [])

    const removeTask = async () => {
        try {
            if (Task !== TaskName) {
                alert('Wpisz poprawną nazwę lekcji!')
                return
            }
            alert(TaskName)
            const res = await axios.delete((process.env.baseURL || 'http://localhost:3001') + '/api/task/' + TaskName)
            if (res.data.status === 'ok') {
                alert('Pomyślnie usunięto lekcję.')
            }
            else {
                alert('Nie udało się usunąć lekcji.')
            }
            window.location.reload(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        removeTask()
    }

    return (
        <div className='myTab'>
            <h2>
                Usuń lekcję wraz z zadaniami
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Wybierz lekcję do usunięcia:
                    <select onChange={(e) => { setTask(e.target.value) }} required>
                        <option value=''>---wybierz lekcję---</option>
                        {
                            props.tasks.map((task, index) => (
                                <option key={index}>{task.title}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    Aby usunąć wskazaną lekcję napisz poniżej jej dokładną nazwę
                    <input type='text' autoComplete='off' placeholder='Nazwa lekcji' onChange={(e) => { setTaskName(e.target.value) }} required />
                </label>
                <button type='submit'>
                    <BiIcons.BiSave />
                </button>
            </form>
        </div>
    )
}
