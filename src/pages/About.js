import React from 'react'
import './About.css'
import AboutTabs from '../components/AboutTabs'

export default function About() {
    return (
        <div className='about' id='about'>
            {/* <h3 className='header'>Nasza misja</h3> */}
            <AboutTabs />
        </div >
    )
}
