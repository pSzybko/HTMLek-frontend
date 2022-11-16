import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'
import Modal from 'react-modal'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


import Editor from '../components/Editor'
import { taskModalStyle } from '../components/TaskModalStyle'
import TaskDescription from '../components/TaskDescription'
import './TaskPage.css'

export default function TaskPage() {
    const location = useLocation()
    const [htmlCode, setHtmlCode] = useState(location.state.exercise.exerciseStartingHTMLCode || '')
    const [cssCode, setCssCode] = useState(location.state.exercise.exerciseStartingCSSCode || '')

    const [source, setSource] = useState('')

    const [showTaskModal, setShowTaskModal] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(`
            <html>
              <body>${htmlCode}</body>
              <style>${cssCode}</style>
            </html>
          `)
        }, 300)
        return () => clearTimeout(timeout)
    }, [htmlCode, cssCode])

    const openTaskModal = () => {
        document.body.style.overflow = 'hidden'
        setShowTaskModal(true)
    }

    const closeTaskModal = () => {
        document.body.style.overflow = 'unset'
        setShowTaskModal(false)
    }

    const handleFinish = async () => {
        try {
            const dataJson = JSON.stringify({
                username: localStorage.getItem('username'),
                taskName: location.state.exercise.exerciseTitle
            })
            const res = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/completeness', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.completeness === 'false') {
                const res2 = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/copmlete', dataJson, {
                    headers: { 'Content-Type': 'application/json' }
                })
                if (res2.data.status === 'ok') {
                    navigate('/')
                }
            }
            else {
                navigate('/')
            }
        } catch (err) {
            alert(err)
        }
    }

    const handleAbort = async () => {
        try {
            const dataJson = JSON.stringify({
                username: localStorage.getItem('username'),
                taskName: location.state.exercise.exerciseTitle
            })
            const res = await axios.post((process.env.baseURL || 'http://localhost:3001') + '/api/incopmlete', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                navigate('/')
            }
        } catch (err) {
            alert(err)
        }
    }

    const handleHelp = () => {
        openTaskModal()
    }

    const handleReset = () => {
        setHtmlCode(location.state.exercise.exerciseStartingHTMLCode)
        setCssCode(location.state.exercise.exerciseStartingCSSCode)
    }

    return (
        <div className='TaskPage'>
            <IconContext.Provider value={{ color: '#453F3C', size: '24px' }}>
                <div className='controlPanel'>
                    <div className='buttons'>
                        <button className='TaskPageButton' title="Ukończ zadanie" onClick={handleFinish}><BiIcons.BiCheck /></button>
                        <button className='TaskPageButton' title="Przerwij zadanie" onClick={handleAbort}><BiIcons.BiX /></button>
                        <button className='TaskPageButton' title="Pomoc" onClick={handleHelp}><BiIcons.BiQuestionMark /></button>
                        <button className='TaskPageButton' title="Zresetuj zadanie" onClick={handleReset}><BiIcons.BiReset /></button>
                    </div>
                </div>
            </IconContext.Provider>
            <Modal
                ariaHideApp={false}
                style={taskModalStyle}
                isOpen={showTaskModal}
                onRequestClose={closeTaskModal}
            >
                <TaskDescription description={location.state.exercise.exerciseDescription} />
            </Modal>
            <div className='break'></div>
            <div className='htmlEditor item'>
                <Editor
                    language='xml'
                    displayName='HTML'
                    codeValue={htmlCode}
                    onChange={setHtmlCode} />
            </div>
            <div className='cssEditor item'>
                <Editor
                    language='css'
                    displayName='CSS'
                    codeValue={cssCode}
                    onChange={setCssCode} />
            </div>
            <div className='break'></div>
            <div className='actualResult item'>
                <div className='taskFrameHeader'>
                    AKTUALNY REZULTAT
                </div>
                <iframe
                    className='myFrame'
                    name='myFrameResult'
                    srcDoc={source}
                    title='result'
                    sandbox='allow-scripts'
                />
            </div>
            <div className='expectedResult item'>
                <div className='taskFrameHeader'>
                    OCZEKIWANY REZULTAT
                </div>
                <iframe
                    className='myFrame'
                    srcDoc={location.state.exercise.exerciseSolutionCode}
                    title='result'
                    sandbox='allow-scripts'
                />
            </div>
        </div>
    )
}