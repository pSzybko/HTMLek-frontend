import AddLesson from './AddLesson'
import EditLesson from './EditLesson'
import RemoveLesson from './RemoveLesson'
import AddExercise from './AddExercise'
import EditExercise from './EditExercise'
import RemoveExercise from './RemoveExercise'

export const AdminTabsElements = [
    {
        title: 'Dodaj lekcję',
        element: AddLesson,
    },
    {
        title: 'Edytuj lekcję',
        element: EditLesson
    },
    {
        title: 'Usun lekcję',
        element: RemoveLesson
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