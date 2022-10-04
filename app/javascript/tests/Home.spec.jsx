import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Home from '../components/Home'
import CollegeApiService from '../services/CollegeApiService'

jest.mock('../services/CollegeApiService')

beforeEach(() => {
  const colleges = [{ id: 1, name: 'Red College', lat: 1.0, lng: 1.0 }]
  CollegeApiService.getColleges.mockResolvedValue({ colleges, error: null, loading: false })
})

describe('Home', () => {
  test('renders successfully', async () => {
    render(<Home />)

    expect(screen.getByText('College Search')).toBeInTheDocument()
  })

  test('clears the search on submit', async () => {
    render(<Home />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, 'test')

    await waitFor(() => {
      expect(input.value).toBe('test')
    })

    userEvent.click(button)

    await waitFor(() => {
      expect(input.value).toBe('')
    })
  })

  test('shows search results', async () => {
    render(<Home />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, 'red')

    await waitFor(() => {
      expect(input.value).toBe('red')
    })

    userEvent.click(button)

    expect(await screen.findByText('red')).toBeInTheDocument()
  })
})
