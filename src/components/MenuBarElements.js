import React from "react"
// import * as BiIcons from "react-icons/bi"
// import * as FiIcons from "react-icons/fi"
import * as CgIcons from "react-icons/cg"

export const ManuBarElements = [
    {
        title: "Home",
        path: "home",
        icon: <CgIcons.CgHomeAlt />,
        cName: "nav-text",
        description: "strona główna",
    },
    {
        title: "About",
        path: "about",
        icon: <CgIcons.CgInfo />,
        cName: "nav-text",
        description: "nasza misja",

    },
    {
        title: "Testimonials",
        path: "testimonials",
        icon: <CgIcons.CgFeed />,
        cName: "nav-text",
        description: "o nas",
    },
]
