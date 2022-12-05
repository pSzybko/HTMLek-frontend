import React, { useState, useEffect } from 'react'

import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'

import './Summary.css'

export default function Summary({ htmlCode, cssCode, exerciseSolutionCode, handleFinish }) {
    const [solutionHTML, setSolutionHTML] = useState('')
    const [solutionCSS, setSolutionCSS] = useState('')

    const getSolution = () => {
        const codeArr = exerciseSolutionCode.split('<style>')
        setSolutionHTML(codeArr[0])
        console.log(codeArr[0])
        if (codeArr.length > 1) {
            setSolutionCSS(codeArr[1].split('</style>')[0])
        }
        else {
            setSolutionCSS('')
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
                        {htmlCode}
                    </div>

                </div>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Twój kod CSS
                    </div>
                    <div className='contentCode'>
                        {cssCode}
                    </div>
                </div>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Przykładowe rozwiązanie HTML
                    </div>
                    <div className='contentCode'>
                        {solutionHTML}
                    </div>
                </div>
                <div className='summaryItem'>
                    <div className='contentHeader'>
                        Przykładowe rozwiązanie CSS
                    </div>
                    <div className='contentCode'>
                        {solutionCSS}
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
