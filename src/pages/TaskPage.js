import React, { useState, useEffect } from 'react'

import Editor from '../components/Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import { IconContext } from "react-icons"
import { VscDebugRestart } from "react-icons/vsc"
import * as BiIcons from "react-icons/bi"

export default function TaskPage() {
    const [htmlCode, setHtmlCode] = useState("<p class='myClass'>Witaj</p>")
    const [cssCode, setCssCode] = useState('.myClass {color: red}')

    const [source, setSource] = useState('')

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

    return (
        <div>
            <div className='editors'>
                <IconContext.Provider value={{ color: "#453F3C", size: "40px" }}>
                    <div className='buttons'>
                        <div className='taskName'>Nazwa</div>
                        <button><BiIcons.BiQuestionMark /></button>
                        <button><VscDebugRestart /></button>
                    </div>
                </IconContext.Provider>
                <Editor
                    language="xml"
                    displayName="HTML"
                    codeValue={htmlCode}
                    onChange={setHtmlCode} />
                <Editor
                    language="css"
                    displayName="CSS"
                    codeValue={cssCode}
                    onChange={setCssCode} />
            </div>
            <div className='results'>
                <iframe srcDoc={source}
                    title="result"
                    sandbox="allow-scripts"
                    frameBorder="1"
                    width="50%"
                    height="100%" />
                <div className='expectedResult'>

                </div>
            </div>
        </div>
    )
}