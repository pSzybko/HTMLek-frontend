import React from 'react'

import Animation from '../components/Animation'

import './Technology.css'

export default function Technology() {
    return (
        <div className='technology'>
            <div className='technologyItem'>
                <div className='technologyText'>
                    Zależało nam na stworzeniu interaktywnej platformy,
                    która nie wymaga użycia programów trzecich -
                    zapomnij o pisaniu kodu w notatniku i ciągłym
                    odświeżaniu strony w przeglądarce -
                    nasze scentralizowane środowisko pozwala na wygodną i wydajną naukę.
                </div>
            </div>
            <div className='technologyItem'>
                <Animation modelPath="/laptop2.stl" />
            </div>
        </div>
    )
}
