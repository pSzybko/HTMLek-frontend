import './App.css'

import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import MainComponent from './components/MainComponent'
import TaskPage from './pages/TaskPage'
import Sandbox from './pages/Sandbox'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainComponent />} />
                    <Route path='/exercise' element={<TaskPage />} />
                    <Route path='/sandbox' element={<Sandbox />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App