import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task'
import '../pages/TaskPage'

import "./Tasks.css"
import TaskPage from '../pages/TaskPage'

export default function Tasks() {
    const [Tasks, setTasks] = useState([])

    const getAllTasks = async () => {
        try {
            const res = await axios.get((process.env.baseURL || "http://localhost:3001") + '/api/tasks')
            if (res.data.status === 'ok') {
                setTasks(res.data.allTasks)
            }
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    return (
        <div className='tasks' id='tasks' >
            <div className='tasksWrapepr'>
                {
                    Tasks.map((task, index) => (
                        <Task task={task} key={index} />
                    ))
                }
            </div>
        </div>
    )
}