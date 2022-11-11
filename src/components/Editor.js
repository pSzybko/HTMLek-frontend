import React from 'react'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/matchtags'

import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props) {
    const {
        language,
        displayName,
        codeValue,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange('' + value)
    }

    return (
        <div className='editor'>
            <div className='taskFrameHeader'>
                {displayName}
            </div>
            <ControlledEditor
                className='codeEditor'
                value={codeValue}
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    lint: true,
                    matchBrackets: true,
                    theme: 'material',
                    lineNumbers: true,
                    mode: language,
                    tabSize: 4,
                    indentUnit: 4
                }}
            />
        </div>
    )
}
