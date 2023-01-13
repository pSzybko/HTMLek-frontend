import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Modal from 'react-modal'
import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'
import axios from 'axios'
import jwtDecode from 'jwt-decode'


import Editor from '../components/Editor'
import SandboxDescription from '../components/SandboxDescription'
import { taskModalStyle } from '../components/TaskModalStyle'
import './Sandbox.css'

export default function Sandbox() {
    const [htmlCode, setHtmlCode] = useState(
        `<!--ZASTĄP TEN KOD SWOIM WŁASNYM PROJEKTEM-->
<div class='myBox'>
    <div class='textWrapper'>
        <span>sandbox</span>
    </div>
    <div class='textWrapper'>
        <span>sandbox</span>
    </div>
</div>`
    )
    const [cssCode, setCssCode] = useState(
        `/*ZASTĄP TEN KOD SWOIM WŁASNYM PROJEKTEM*/
html,
body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
}

.myBox {
    display: flex;
}

.myBox .textWrapper {
    width: 400px;
    height: 200px;
    line-height: 200px;
    font-size: 4em;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
}

.myBox .textWrapper:first-child {
    background-color: indianred;
    color: darkred;
    transform-origin: right;
    transform: perspective(100px) rotateY(-15deg);
}

.myBox .textWrapper:last-child {
    background-color: lightcoral;
    color: antiquewhite;
    transform-origin: left;
    transform: perspective(100px) rotateY(15deg);
}

.myBox .textWrapper span {
    position: absolute;
    animation: marquee 7s linear infinite;
}

.myBox .textWrapper:first-child span {
    animation-delay: 3.5s;
    left: -250%;
}

@keyframes marquee {
    from {
        left: 100%;
    }

    to {
        left: -100%;
    }
}`
    )

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = jwtDecode(token)
        const dataJson = JSON.stringify({
            username: user.username,
        })
        const getCode = async () => {
            const res = await axios.post((process.env.REACT_APP_BASE_URL || 'http://localhost:3001') + '/api/code', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status === 'ok') {
                if (res.data.sandboxHTML.length !== 0) setHtmlCode(res.data.sandboxHTML)
                if (res.data.sandboxCSS.length !== 0) setCssCode(res.data.sandboxCSS)
            }
        }

        getCode()

    }, [])

    const [source, setSource] = useState('')

    const [showTaskModal, setShowTaskModal] = useState(true)

    const navigate = useNavigate()

    const saveCode = () => {
        const element = document.createElement('a')
        const blob = new Blob([
            `
<html>
    <body>
        ${htmlCode}
    </body>
    <style>
        ${cssCode}
    </style>
</html>
`
        ], { type: 'text/html' })
        element.href = URL.createObjectURL(blob)
        element.download = 'HTMLek.html'
        document.body.appendChild(element)
        element.click()
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(`
            <html>
              <body>${htmlCode}</body>
              <style>${cssCode}</style>
            </html>
          `)
        }, 300)
        const timeout2 = setTimeout(() => {
            handleSave()
        }, 60 * 5000)
        return () => {
            clearTimeout(timeout)
            clearTimeout(timeout2)
        }
    })

    const handleFinish = async () => {
        handleSave(false)
        navigate('/home')
    }

    const handleSave = async () => {
        const token = localStorage.getItem('token')
        const user = jwtDecode(token)

        const dataJson = JSON.stringify({
            username: user.username,
            sandboxHTML: htmlCode,
            sandboxCSS: cssCode
        })
        try {
            const res = await axios.post((process.env.REACT_APP_BASE_URL || 'http://localhost:3001') + '/api/sandbox', dataJson, {
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.data.status !== 'ok') {
                console.log(res.data.error)
                navigate('/home')
            }
        } catch (err) {
            console.log(err)
            navigate('/home')
        }
    }

    const openTaskModal = () => {
        document.body.style.overflow = 'hidden'
        setShowTaskModal(true)
    }

    const closeTaskModal = () => {
        document.body.style.overflow = 'unset'
        setShowTaskModal(false)
    }

    return (
        <div className='SandboxWrapper'>
            <div className='buttons'>
                <div className='buttonsFrame'>
                    <IconContext.Provider value={{ color: '#453F3C', size: '24px' }}>
                        <button className='TaskPageButton' title='Zapisz i zakończ' onClick={handleFinish}><BiIcons.BiCheck /></button>
                        <button className='TaskPageButton' title='Zapisz na komputerze' onClick={saveCode}><BiIcons.BiDownload /></button>
                        <button className='TaskPageButton' title='Pomoc' onClick={openTaskModal}><BiIcons.BiQuestionMark /></button>
                    </IconContext.Provider>
                </div>
            </div>
            <Modal
                ariaHideApp={false}
                style={taskModalStyle}
                isOpen={showTaskModal}
                onRequestClose={closeTaskModal}
            >
                <SandboxDescription />
            </Modal>
            <div className='TaskPageColumn'>
                <div className='column rowContainer'>
                    <div className='item rowItem'>
                        <Editor
                            language='xml'
                            displayName='HTML'
                            codeValue={htmlCode}
                            onChange={setHtmlCode} />
                    </div>
                    <div className='item rowItem'>
                        <Editor
                            language='css'
                            displayName='CSS'
                            codeValue={cssCode}
                            onChange={setCssCode} />
                    </div>
                </div>
                <div className='column'>
                    <div className='item columnItem'>
                        <div className='taskFrameHeader'>
                            AKTUALNY REZULTAT
                        </div>
                        <iframe
                            className='myFrameHigh'
                            srcDoc={source}
                            title='result'
                            sandbox='allow-scripts'
                            width='100%'
                            height='100%' />
                    </div>
                </div>
            </div>
        </div>
    )
}