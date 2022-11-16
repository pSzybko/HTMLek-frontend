import React from 'react'

import * as CgIcons from 'react-icons/cg'

export const ManuBarElements = [
    {
        title: 'Home',
        path: 'home',
        icon: <CgIcons.CgHomeAlt />,
        cName: 'nav-text',
        description: 'Strona główna',
    },
    {
        title: 'About',
        path: 'about',
        icon: <CgIcons.CgFeed />,
        cName: 'nav-text',
        description: 'O nas',

    },
    {
        title: 'Testimonials',
        path: 'author',
        icon: <CgIcons.CgInfo />,
        cName: 'nav-text',
        description: 'Autor',
    },
]
