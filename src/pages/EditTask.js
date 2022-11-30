import React, { useState, useEffect } from 'react'

export default function EditTask(props) {
    useEffect(() => {
        props.getTasks()
    }, [])

    return (
        <div>
            <p>
                TODO wybór zadania + wyświetlenie wszystkich danych + zapis
            </p>
            <label>
                Wybierz lekcję do usunięcia:
                <select>
                    {
                        props.tasks.map((task, index) => (
                            <option key={index}>{task.title}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}
