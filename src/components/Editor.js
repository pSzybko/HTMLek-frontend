import React, { useState } from 'react'

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
            <div className='editor-header'>
                {displayName}
            </div>
            <ControlledEditor
                value={codeValue}
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    lint: true,
                    autoCloseBrackets: true,
                    autoCloseTags: true,
                    matchBrackets: true,
                    matchTags: true,
                    theme: 'material',
                    lineNumbers: true,
                    mode: language,
                }}
            />
        </div>
    )
}
