import { render, screen } from "@testing-library/react" // monta un componente nel virtual DOM
import HiddenSection from "../components/HiddenSection"

// qui scriveremo i test del component

// TO DO :

// - render corretto 
// - all'avvio con l'etichetta MOSTRA

// - mi aspetto che la card all avvio non ci sia
// - mi aspetto che la card compaia dopo un click del bottone
// - mi aspetto che la etichetta del bottone cambi dopo il click
// - mi aspetto che la card scompaia dopo due click


describe('Just button testing', () => {

    it('mounts the button correctly at launch', () => {

        // MONTAGGIO DEL COMPONENTE NEL DOM
        render(<HiddenSection />)

        // RICERCA DELL'ELEMENTO CON CUI INTERAGIRE UTILIZZANDO getBy, findBy o queryBy

        const button = screen.getByRole('button')

        // ITERAZIONE CON IL BOTTONE (in questo momento non ci interessa)

        // VERIFICA DEI RISULTATI ATTESI

        expect(button).toBeInTheDocument()

    })

    it('checks if inital button label is MOSTRA', () => {
        render(<HiddenSection />)
        const button = screen.getByText('MOSTRA')
        expect(button).toBeInTheDocument()
})
})

describe('Card Testing', () => {

})

