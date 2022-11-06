import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Task(props) {
    const [ShowMore, setShowMore] = useState(false)

    return (
        <div className='task'>
            <div className={ShowMore ? 'taskTitle open' : 'taskTitle closed'} onClick={() => { setShowMore(!ShowMore) }}>{props.num + 1 + '. ' + props.task.title}</div>
            {
                ShowMore && (
                    <div className='taskDescription'>
                        <p className='descr'>
                            {props.task.description}
                        </p>
                        <p className='exerciseHeader'>
                            Teoria wraz z ćwiczeniami:
                        </p>
                        <ul className='exerciseList'>
                            {props.task.exercises.map((exercise, index) => (
                                <li className='exercise' key={index}>
                                    <div className='clickableLinks'>
                                        <Link className='myLink' to='/exercise' state={{ exercise: exercise, task: props.task }}>
                                            {exercise.exerciseTitle}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
