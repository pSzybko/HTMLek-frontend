import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'
import Modal from 'react-modal'
import axios from 'axios'


import Editor from '../components/Editor'
import { taskModalStyle } from '../components/TaskModalStyle'
import TaskDescription from '../components/TaskDescription'
import './TaskPage.css'

export default function TaskPage() {
    const navigate = useNavigate()

    const [exercise, setExercise] = useState({})

    const [htmlCode, setHtmlCode] = useState('')
    const [cssCode, setCssCode] = useState('')

    const [source, setSource] = useState('')

    const [showTaskModal, setShowTaskModal] = useState(true)

    const getExercise = async () => {
        try {
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const taskId = urlParams.get('task')
            const exerciseId = urlParams.get('exercise')

            const res = await axios.get((process.env.baseURL || 'http://localhost:3001') + '/api/exercise/' + taskId + '/' + exerciseId)

            if (res.data.status !== 'ok') {
                console.log(res.data.error)
                navigate('/')
            }
            setExercise(res.data.exercise)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getExercise()
    }, [])

    useEffect(() => {
        setHtmlCode(exercise.exerciseStartingHTMLCode || '')
        setCssCode(exercise.exerciseStartingCSSCode || '')
    }, [exercise])

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
                taskName: exercise.exerciseTitle
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
                taskName: exercise.exerciseTitle
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
        setHtmlCode(exercise.exerciseStartingHTMLCode)
        setCssCode(exercise.exerciseStartingCSSCode)
    }

    return (
        <div className='TaskPage'>
            <IconContext.Provider value={{ color: '#453F3C', size: '24px' }}>
                <div className='controlPanel'>
                    <div className='buttons'>
                        <button className='TaskPageButton' title='Ukończ zadanie' onClick={handleFinish}><BiIcons.BiCheck /></button>
                        <button className='TaskPageButton' title='Przerwij zadanie' onClick={handleAbort}><BiIcons.BiX /></button>
                        <button className='TaskPageButton' title='Pomoc' onClick={handleHelp}><BiIcons.BiQuestionMark /></button>
                        <button className='TaskPageButton' title='Zresetuj zadanie' onClick={handleReset}><BiIcons.BiReset /></button>
                    </div>
                </div>
            </IconContext.Provider>
            <Modal
                ariaHideApp={false}
                style={taskModalStyle}
                isOpen={showTaskModal}
                onRequestClose={closeTaskModal}
            >
                <TaskDescription description={exercise.exerciseDescription} />
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
                    srcDoc={exercise.exerciseSolutionCode}
                    title='result'
                    sandbox='allow-scripts'
                />
            </div>
        </div>
    )
}