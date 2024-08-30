import {  render, screen } from '@testing-library/react'
import Welcome from '../components/Welcome'

describe ('Checking if Welcome load correctly', () => {
    it('checking welcome', () => {
        render(<Welcome />)
        const title = screen.getByText(/benvenuti/i)
        expect(title).toBeInTheDocument()
    })
})