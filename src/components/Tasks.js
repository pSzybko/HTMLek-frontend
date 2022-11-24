import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import jwtDecode from 'jwt-decode'


import Task from './Task'
import './Tasks.css'

export default function Tasks() {
    const [Tasks, setTasks] = useState([])
    const [finishedTasks, setFinishedTasks] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getAllTasks = async () => {
        try {
            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/tasks')
            if (res.data.status === 'ok') {
                setTasks(res.data.allTasks)
            }

            const token = localStorage.getItem('token')
            const user = jwtDecode(token)

            const dataJson = JSON.stringify({
                username: user.username,
            })
            const res2 = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/completed', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res2.data.status === 'ok') {
                setFinishedTasks(res2.data.completedTasks)
            }
        } catch (err) {
            alert('Nie udało się wczytać zawartości strony :(')
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
                        < Task finishedTasks={finishedTasks} task={task} num={index} key={index} />
                    ))
                }
                <div className='task'>
                    <Link className='myLink' to='/sandbox' >
                        <div className='taskTitle closed sandboxTitle'><AiIcons.AiOutlineCodeSandbox /> Tryb sandbox</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}