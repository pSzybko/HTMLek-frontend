import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Task from './Task'

import "./Tasks.css"

export default function Tasks() {
    const [Tasks, setTasks] = useState([])
    const [Loaded, setLoaded] = useState(false)


    const getAllTasks = async () => {
        try {
            const res = await axios.get((process.env.baseURL || "http://localhost:3001") + '/api/tasks')
            if (res.data.status === 'ok') {
                setTasks(res.data.allTasks)
                setLoaded(true)
            }
        } catch (err) {
            alert(err)
        }
    }

    if (!Loaded)
        getAllTasks()

    return (
        <div div className='tasks' id='tasks' >
            <div className='tasksWrapepr'>
                {
                    Tasks.map(task => (
                        <Task task={task} />
                    ))
                }
            </div>
        </div>
    )
}