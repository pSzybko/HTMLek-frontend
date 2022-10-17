import React, { useState } from 'react'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"

import TaskPage from '../pages/TaskPage'

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
                                <li className='exercise' key={index}>
                                    <div className='clickableLinks'>
                                        <Link to='/exercise' state={{ exercise: exercise, task: props.task }}>
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
