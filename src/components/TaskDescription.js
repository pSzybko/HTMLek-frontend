import React from 'react'

import './TaskDescription.css'
import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"

export default function TaskDescription(props) {
    return (
        <div className='taskModal' dangerouslySetInnerHTML={{ __html: props.description }}>
        </div>
    )
}
