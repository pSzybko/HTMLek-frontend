import React from 'react'

import './TaskDescription.css'

export default function TaskDescription(props) {
    return (
        <div>
            <div className='taskModal' dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </div>
    )
}
