import { render, screen } from '@testing-library/react'
import HomePage from '../pages'

describe('HomePage', () => {
    it('should have Переваги продукту text', () => {
        render(<HomePage />)
    
        const elem = screen.getByText('Переваги продукту')
        expect(elem).toBeInTheDocument()
    })

    it('should contain the text "Доступність"', () => {
        render(<HomePage />)
    
        const elem = screen.getByText(/Доступність/i)
        expect(elem).toBeInTheDocument()
    })

    it('should have a heading', () => {
        render(<HomePage />)
    
        const elem = screen.getByRole('heading', {
            name: 'Lorem ipsum dolor sit amet'
        })
        expect(elem).toBeInTheDocument()
    })
})