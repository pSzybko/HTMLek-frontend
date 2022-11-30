import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import jwtDecode from 'jwt-decode'
import axios from 'axios'

import AdminTabs from '../components/AdminTabs'
import { AdminTabsElements } from './AdminTabsElements'

import './AdminPage.css'

export default function AdminPage() {
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

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
            window.location.reload(false)
        }
        const user = jwtDecode(token)
        if (user.role !== 'admin') {
            navigate('/home')
        }
    })

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className='AdminPageHome'>
            <h1>
                HTMLek Panel Administratora
            </h1>
            <button onClick={logOut}>Logout</button>
            <AdminTabs tabs={AdminTabsElements} tasks={Tasks} getTasks={getTasks} />
        </div>
    )
}
