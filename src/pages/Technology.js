import React from 'react'

import Animation from '../components/Animation'

import '../components/AboutTabsElements.css'

export default function Technology() {
    return (
        <div className='AboutTabsElement'>
            <div className='AboutTabsElementItem'>
                <div className='text'>
                    Głównym celem stworzenia platformy było wyeliminowanie
                    konieczności korzystania z programów trzecich - zapomnij
                    o pisaniu kodu w notatniku oraz ciągłym odświeżaniu strony w
                    przeglądarce. Nasze scentralizowane środowisko pozwala na wygodną i
                    wydajną naukę.
                </div>
            </div>
            <div className='AboutTabsElementItem'>
                <Animation modelPath="/technology.stl" />
            </div>
        </div>
    )
}
