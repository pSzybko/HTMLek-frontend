import React from 'react'

import Animation from '../components/Animation'

import './Home.css'

export default function Home() {
    return (
        <div className='home' id='home'>
            <div className='animationWrapper'>
                <Animation modelPath='/Home.stl' />
            </div>
            <div>
                <div className='Text-box'>
                    <h1 className='Title'>&lt;<strong>p</strong>&gt;HTMLek&lt;/<strong>p</strong>&gt;</h1>
                    <h3 className='Subtitle'>System edukacyjny do nauki języka HTML/CSS na poziomie szkolnym</h3>
                </div>
            </div >
        </div>
    )
}
