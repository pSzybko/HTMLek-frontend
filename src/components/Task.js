import React, { useState } from 'react'

import { Link } from 'react-router-dom'

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
                        <div className='ecerciseWrapper'>
                            <ul className='exerciseList'>
                                {props.task.exercises.map((exercise, index) => (
                                    <li className={props.finishedTasks.includes(exercise.exerciseTitle) ? 'exercise doneExercise' : 'exercise'} key={index} >
                                        <Link className='myLink' to='/exercise' state={{ exercise: exercise, task: props.task }}>
                                            <div className='clickableLink'>
                                                {exercise.exerciseTitle}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
