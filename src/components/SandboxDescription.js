import React from 'react'

import { IconContext } from "react-icons"
import * as BiIcons from "react-icons/bi"

export default function SandboxDescription() {
    return (
        <div>
            <IconContext.Provider value={{ color: "#453F3C", size: "40px" }}>
                <h3 className='sanboxModalHeader'>Witaj w trybie sandbox</h3>
                <div className='sandboxModalBody'>
                    Tryb sandbox pozwala Ci na pełną swobodę - nie ma tu zadań ani poleceń.
                    Wykorzystaj zdobyte umiejętności i stwórz swój własny projekt.
                    Jeżeli jesteś tu pierwszy raz, zacznij od przygotowanych lekcji.
                    Środowisko działa analogicznie jak te poznane już podczas wykonywania zadań.
                    <br />
                    <ul className='buttonList'>
                        <li>
                            <BiIcons.BiDownload />
                            - możesz zapisać stworzony kod lokalnie na swoim komputerze. Dzięki temu nie stracisz utworzonego projektu, a pobrany plik pozwoli na uruchomienie go w dowolnej przeglądarce internetowej.
                        </li>
                        <li>
                            <BiIcons.BiCheck />
                            - wyjście z trybu sandbox oraz jednoczesne zapisanie wprowadzonych zmian.
                        </li>
                        <li>
                            <BiIcons.BiSave />
                            - zapisz aktualny postęp pracy.
                        </li>
                        <li>
                            <BiIcons.BiQuestionMark />
                            - uzyskaj pomoc.
                        </li>
                    </ul>
                </div>
            </IconContext.Provider>
        </div>
    )
}
