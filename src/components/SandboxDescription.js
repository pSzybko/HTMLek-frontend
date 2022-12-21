import React from 'react'

import { IconContext } from 'react-icons'
import * as BiIcons from 'react-icons/bi'

import './ExerciseDescription.css'

export default function SandboxDescription() {
    return (
        <div className='modalDescription'>
            <IconContext.Provider value={{ color: '#453F3C', size: '40px' }}>
                <h3 className='modalHeader'>Witaj w trybie sandbox</h3>
                <div className='modalBody'>
                    Tryb sandbox pozwala Ci na pełną swobodę - nie ma tu zadań ani poleceń.
                    Wykorzystaj zdobyte umiejętności i stwórz swój własny projekt.
                    <strong>
                        &nbsp;
                        Jeżeli jesteś tu pierwszy raz, zacznij od przygotowanych lekcji!!!
                        &nbsp;
                    </strong>
                    <div className='buttonDescription'>
                        <p className='buttonHeader'>
                            Środowisko działa analogicznie jak te poznane już podczas wykonywania zadań, chociaż posiada kilka nowych możliwości:
                        </p>
                        <ul className='buttonList'>
                            <li>
                                <BiIcons.BiDownload className='buttonListIcon' />
                                <span className='separator'> - </span>
                                zapisz stworzony kod na swoim komputerze.
                                Dzięki temu możesz kontynuować pracę lokalnie,
                                a utworzony projekt uruchomić w dowolnej przeglądarce internetowej.
                            </li>
                            <li>
                                <BiIcons.BiCheck className='buttonListIcon' />
                                <span className='separator'> - </span>
                                wyjście z trybu sandbox oraz jednoczesne zapisanie wprowadzonych zmian.
                                Dzięki temu nie utracisz stworzonego kodu i będziesz mógł kontynuować pracę w tym samym miejscu.
                            </li>
                            <li>
                                <BiIcons.BiQuestionMark className='buttonListIcon' />
                                <span className='separator'> - </span>
                                uzyskaj pomoc.
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}
