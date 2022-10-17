import './App.css'

import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import MainComponent from './components/MainComponent'
import TaskPage from './pages/TaskPage'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainComponent />} />
                    <Route path='/exercise' element={<TaskPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App