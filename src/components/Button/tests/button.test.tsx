/* eslint-disable testing-library/await-async-query */
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button test', () => {
  it('renders test with default setting', () => {
    render(<Button>Test</Button>)
    expect(screen.findByRole('button', { name: 'Test' })).toBeTruthy()
  })
})
