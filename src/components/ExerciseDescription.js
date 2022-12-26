import React from 'react'

import './ExerciseDescription.css'

export default function ExerciseDescription(props) {
    return (
        <div>
            <div className='taskModal' dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </div>
    )
}
