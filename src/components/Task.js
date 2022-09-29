import React, { useState } from 'react'

export default function Task(props) {
    const [ShowMore, setShowMore] = useState(false)

    return (
        <div className='task'>
            <p className={ShowMore ? 'taskTitle open' : 'taskTitle closed'} onClick={() => { setShowMore(!ShowMore) }}>{props.task.title}</p>
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
                            {props.task.exercises.map(exercise => (
                                <li className='exercise'>{exercise.exerciseTitle}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
