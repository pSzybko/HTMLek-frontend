import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import MainComponent from './components/MainComponent'
import TaskPage from './pages/TaskPage'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import Sandbox from './pages/Sandbox'
import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainComponent />} />
                    <Route path='/home' element={<UserPage />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/exercise' element={<TaskPage />} />
                    <Route path='/sandbox' element={<Sandbox />} />

                    <Route path='/*' element={<MainComponent />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App