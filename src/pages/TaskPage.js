import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import Editor from '../components/Editor'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"
import './TaskPage.css'

import { useLocation } from 'react-router-dom'

export default function TaskPage(props) {
    const location = useLocation()
    const [htmlCode, setHtmlCode] = useState("<p class='myClass'>Witaj</p>")
    const [cssCode, setCssCode] = useState('.myClass {color: red}')

    const [source, setSource] = useState('')

    const navigate = useNavigate()

    useEffect(() => {

    }, [])

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

    const handleFinish = () => {
        //TODO zmiana statusu w bazie danych 
        navigate("/")
    }

    const handleAbort = () => {
        navigate("/")
    }

    const handleHelp = () => {
        //TODO alert -> help modal
        alert(location.state.exercise.exerciseDescription)
    }

    const handleReset = () => {
        //Reset kodu do stanu początkowego - ponowne pobranie z bazy 
    }

    return (
        <div className='TaskPage'>
            <IconContext.Provider value={{ color: "#453F3C", size: "40px" }}>
                <div className='controlPanel'>
                    <div className='taskName'>Nazwa</div>
                    <div className='buttons'>
                        <button className='finishButton' onClick={handleFinish}><BiIcons.BiCheck /></button>
                        <button className='abortButton' onClick={handleAbort}><BiIcons.BiX /></button>
                        <button className='helpButton' onClick={handleHelp}><BiIcons.BiQuestionMark /></button>
                        <button className='resetButton' onClick={handleReset}><BiIcons.BiReset /></button>
                    </div>
                </div>
            </IconContext.Provider>
            <div className='break'></div>
            <div className='htmlEditor item'>
                <Editor
                    language="xml"
                    displayName="HTML"
                    codeValue={htmlCode}
                    onChange={setHtmlCode} />
            </div>
            <div className='cssEditor item'>
                <Editor
                    language="css"
                    displayName="CSS"
                    codeValue={cssCode}
                    onChange={setCssCode} />
            </div>
            <div className='break'></div>
            <div className='actualResult item'>
                <div className='result-header'>
                    AKTUALNY REZULTAT
                </div>
                <iframe
                    className='myFrame'
                    srcDoc={source}
                    title="result"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%" />
            </div>
            <div className='expectedResult item'>
                <div className='result-header'>
                    PRZYKŁADOWY REZULTAT
                </div>
                {/* source zmienić na pobrany z bazy danych */}
                <iframe
                    className='myFrame'
                    srcDoc={source}
                    title="result"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%" />
            </div>
        </div>
    )
}