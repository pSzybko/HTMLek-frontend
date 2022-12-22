import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import jwtDecode from 'jwt-decode'


import Lesson from './Lesson'
import './Lessons.css'

export default function Lessons() {
    const [Lessons, setLessons] = useState([])
    const [finishedLessons, setFinishedLessons] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const getAllLessons = async () => {
        try {
            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/lessons')
            if (res.data.status === 'ok') {
                setLessons(res.data.allTasks)
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
                setFinishedLessons(res2.data.completedTasks)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllLessons()
    }, [])

    return (
        <div className='tasks' id='tasks' >
            <div className='tasksWrapepr'>
                {
                    Lessons.map((task, index) => (
                        <Lesson finishedTasks={finishedLessons} task={task} num={index} key={index} />
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