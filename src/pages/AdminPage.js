import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import jwtDecode from 'jwt-decode'
import axios from 'axios'

import { IconContext } from 'react-icons'

import AdminTabs from '../components/AdminTabs'
import StickyBar from '../components/StickyBar'
import { AdminTabsElements } from './AdminTabsElements'

import './AdminPage.css'

export default function AdminPage() {
    const navigate = useNavigate()

    const [Tasks, setTasks] = useState([])
    const [Username, setUsername] = useState('')

    const getTasks = async () => {
        try {
            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/lessons')
            if (res.data.status === 'ok') {
                setTasks(res.data.allTasks)
            }
        } catch (err) {
            console.log(err)
        }
    }

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
        setUsername(user.username)
    })

    return (
        <div className='AdminPageHome'>
            <div className='headerSection'>
                <StickyBar username={Username} page={'admin'} />
            </div>
            <div className='bodySection'>
                <IconContext.Provider value={{ color: 'black', size: '60px' }}>
                    <AdminTabs tabs={AdminTabsElements} tasks={Tasks} getTasks={getTasks} />
                </IconContext.Provider>
            </div>
        </div>
    )
}
