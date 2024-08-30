import { render, screen } from "@testing-library/react"
import BookList from "../components/BookList"
import fantasy from '../data/fantasy.json'

describe('Checkin the Booklist element', () => {
    it('Checks if all the element are displayed', () => {
        render(<BookList books={fantasy} />)
        const singlebook = screen.getAllByTestId('single-book')
        expect(singlebook.length).toBe(fantasy.length)
    });
})