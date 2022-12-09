import React from 'react'

import Animation from '../components/Animation'

import '../components/AboutTabsElements.css'

export default function Mission() {
    return (
        <div className='AboutTabsElement'>
            <div className='AboutTabsElementItem'>
                <Animation modelPath="/trophy.stl" />
            </div>
            <div className='AboutTabsElementItem'>
                <div className='text'>
                    Platforma ma na celu ułatwić pierwsze kroki ucznia
                    w świecie programowania i technologii webowych.
                    Środowisko, pozwalające natychmiastowo zobaczyć każdą
                    zmianę w kodzie, pozytywnie wpływa na budowanie wyobraźni
                    ucznia, jak tworzony przez niego kod wpływa na końcowy
                    rezultat. Platforma umożliwia łatwy dotęp do materiałów
                    oraz realizację własnych mini-projektów, nawet po
                    zajęciach szkolnych.
                </div>
            </div>
        </div>
    )
}
