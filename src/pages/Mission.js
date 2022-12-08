import React from 'react'

import Animation from '../components/Animation'

import './Mission.css'

export default function Mission() {
    return (
        <div className='mission'>
            <div className='missionItem'>
                <Animation modelPath="/trophy2.stl" />
            </div>
            <div className='missionItem'>
                <div className='missionText'>
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
