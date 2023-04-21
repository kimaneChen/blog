import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button test', () => {
  it('renders test with default setting', () => {
    const button = render(<Button>Test</Button>)
    expect(button.findByRole('button',{name:'Test'})).toBeInTheDocument
    expect(button).toMatchSnapshot()    
  })

})
