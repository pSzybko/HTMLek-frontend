import AddTask from '../pages/AddTask'
import EditTask from '../pages/EditTask'
import RemoveTask from './RemoveTask'
import AddExercise from './AddExercise'
import EditExercise from './EditExercise'
import RemoveExercise from './RemoveExercise'

export const AdminTabsElements = [
    {
        title: 'Dodaj lekcję',
        element: AddTask,
    },
    {
        title: 'Edytuj lekcję',
        element: EditTask
    },
    {
        title: 'Usun lekcję',
        element: RemoveTask
    },
    {
        title: 'Dodaj zadanie',
        element: AddExercise
    },
    {
        title: 'Edytuj zadanie',
        element: EditExercise
    },
    {
        title: 'Usun zadanie',
        element: RemoveExercise
    },
]