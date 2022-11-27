import React from 'react'

import AddTask from '../pages/AddTask'
import EditTask from '../pages/EditTask'
import RemoveTask from './RemoveTask'
import AddExercise from './AddExercise'
import EditExercise from './EditExercise'
import RemoveExercise from './RemoveExercise'

export const AdminTabsElements = [
    {
        title: 'Dodaj lekcję',
        text: <AddTask />
    },
    {
        title: 'Edytuj lekcję',
        text: <EditTask />
    },
    {
        title: 'Usun lekcję',
        text: <RemoveTask />
    },
    {
        title: 'Dodaj zadanie',
        text: <AddExercise />
    },
    {
        title: 'Edytuj zadanie',
        text: <EditExercise />
    },
    {
        title: 'Usun zadanie',
        text: <RemoveExercise />
    },
]