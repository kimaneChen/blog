import { render } from '@testing-library/react'
import Button from '../Button'

describe('Button test', () => {
  it('renders test with default setting', () => {
    const view = render(<Button>Test</Button>)
    expect(view.findByRole('button', { name: 'Test' })).toBeInTheDocument
    expect(button).toMatchSnapshot()
  })
})
