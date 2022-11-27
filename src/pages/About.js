import React from 'react'

import AboutTabs from '../components/AboutTabs'
import { tabs } from '../components/AboutTabsElements'
import './About.css'

export default function About() {
    return (
        <div className='about' id='about'>
            <AboutTabs tabs={tabs} />
        </div >
    )
}
