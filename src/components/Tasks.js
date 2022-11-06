import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task'
import { Link } from "react-router-dom"

import "./Tasks.css"

export default function Tasks() {
    const [Tasks, setTasks] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                        < Task task={task} num={index} key={index} />
                    ))
                }
                <div className='task'>
                    <Link className='myLink' to='/sandbox' >
                        <div className='taskTitle closed'>Tryb sandbox</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}