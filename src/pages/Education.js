import React from 'react'

import Animation from '../components/Animation'

import './Education.css'

export default function Education() {
    return (
        <div className='education'>
            <div className='educationItem'>
                <Animation modelPath="/GradHat.stl" />
            </div>
            <div className='educationItem'>
                <div className='educationText'>
                    Tworząc platformę edukacyjną korzystaliśmy z doświadczenia
                    zarówno uczniów jak i nauczycieli. Skoncentrowaliśmy się na
                    stworzeniu narzędzia, które może być wykorzystywane w szkołach,
                    oraz po które uczniowie chętnie sięgną poza zajęciami lekcyjnymi.
                    Z tego powodu oferujemy zarówno zagadnienia na poziomie podstawowym
                    oraz zaawansowane materiały dla najbardziej zainteresowanych.
                </div>
            </div>
        </div>
    )
}
