import React, { useState } from 'react'

export default function Task(props) {
    const [ShowMore, setShowMore] = useState(false)

    return (
        <div className='task'>
            <div className={ShowMore ? 'taskTitle open' : 'taskTitle closed'} onClick={() => { setShowMore(!ShowMore) }}>{props.task.title}</div>
            {
                ShowMore && (
                    <div className='taskDescription'>
                        <p className='descr'>
                            {props.task.description}
                        </p>
                        <p className='exerciseHeader'>
                            Teoria i ćwiczenia:
                        </p>
                        <ul className='exerciseList'>
                            {props.task.exercises.map((exercise, index) => (
                                <li className='exercise' key={index}>{exercise.exerciseTitle}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
