import React from "react"

import Technology from '../pages/Technology'
import Education from '../pages/Education'
import Mission from '../pages/Mission'

export const tabs = [
    {
        title: 'Misja',
        text: <Mission />
    },
    {
        title: 'Edukacja',
        text: <Education />
    },
    {
        title: 'Technologia',
        text: <Technology />
    }
]