import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function RemoveTask() {
    const [Tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/tasks')
            if (res.data.status === 'ok') {
                setTasks(res.data.allTasks)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTasks()
    })

    return (
        <div>
            <p>
                TODO wybór zadania + potwierdzenie (może na zasadzie github)
            </p>
            <label>
                Wybierz lekcję do usunięcia:
                <select>
                    {
                        Tasks.map((task, index) => (
                            <option>{task.title}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}
