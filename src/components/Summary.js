import React, { useState, useEffect } from 'react'

import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'

import Editor from '../components/Editor'

import './Summary.css'
import prettier from 'prettier/standalone'
import parserHtml from 'prettier/parser-html'
import parserCss from 'prettier/parser-postcss'

export default function Summary({ htmlCode, cssCode, exerciseSolutionCode, handleFinish }) {
    const [solutionHTML, setSolutionHTML] = useState('')
    const [solutionCSS, setSolutionCSS] = useState('')

    const getSolution = () => {
        const codeArr = exerciseSolutionCode.split('<style>')
        try {
            const formattedHTML = codeArr[0] ? prettier.format('' + codeArr[0], {
                parser: 'html',
                plugins: [parserHtml],
            }) : ''
            setSolutionHTML(formattedHTML)
        } catch (err) {
            setSolutionHTML(codeArr[0])
        }
        try {
            if (codeArr.length > 1) {
                const formattedCSS = prettier.format(codeArr[1].split('</style>')[0], {
                    parser: 'css',
                    plugins: [parserCss],
                })
                setSolutionCSS(formattedCSS)
            }
            else {
                setSolutionCSS('')
            }
        } catch (err) {
            setSolutionCSS(codeArr[1].split('</style>')[0])
        }
    }

    useEffect(() => {
        getSolution()
    }, [])


    return (
        <div className='mySummary'>
            <div className='summaryHeader'>
                <h3>Porównaj swój kod z zaproponowanym rozwiązaniem.</h3>
            </div>
            <div className='summaryBox'>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Twój kod HTML
                    </div>
                    <div className='contentCode'>
                        <Editor
                            language='xml'
                            codeValue={htmlCode}
                            onChange={() => { }} />
                    </div>

                </div>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Przykładowe rozwiązanie HTML
                    </div>
                    <div className='contentCode'>
                        <Editor
                            language='xml'
                            codeValue={solutionHTML}
                            onChange={() => { }} />
                    </div>
                </div>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Twój kod CSS
                    </div>
                    <div className='contentCode'>
                        <Editor
                            language='css'
                            codeValue={cssCode}
                            onChange={() => { }} />
                    </div>
                </div>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Przykładowe rozwiązanie CSS
                    </div>
                    <div className='contentCode'>
                        <Editor
                            language='css'
                            codeValue={solutionCSS}
                            onChange={() => { }} />
                    </div>
                </div>
            </div>
            <div className='controlPanel'>
                <IconContext.Provider value={{ color: '#453F3C', size: '40px' }}>
                    <button className='TaskPageButton' title='Ukończ zadanie' onClick={handleFinish}><BiIcons.BiCheck /></button>
                </IconContext.Provider>
            </div>
        </div>
    )
}
