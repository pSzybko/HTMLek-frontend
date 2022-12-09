import React from 'react'

import Animation from '../components/Animation'

import '../components/AboutTabsElements.css'

export default function Education() {
    return (
        <div className='AboutTabsElement'>
            <div className='AboutTabsElementItem'>
                <Animation modelPath="/GradHat.stl" />
            </div>
            <div className='AboutTabsElementItem'>
                <div className='text'>
                    Platforma była tworzona w oparciu o doświadczenie nauczycieli jak
                    i potrzeby uczniów. Stanowi narzędzie, które może być wykorzystywane
                    w szkołach, oraz po które uczniowie chętnie sięgną poza zajęciami lekcyjnymi.
                    Platforma oferuje zarówno zagadnienia na poziomie podstawowym, ale również
                    zaawansowane materiały dla najbardziej zainteresowanych.
                </div>
            </div>
        </div>
    )
}
