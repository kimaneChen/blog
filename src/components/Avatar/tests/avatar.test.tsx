import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Avatar from '@/components/Avatar'

describe('Avatar test', () => {
  it('renders a avatar with default setting', () => {
    const avatar = render(<Avatar width={20} height={20} />)

    const image = screen.getByAltText('User Avatar') as HTMLImageElement
    expect(image.src).toContain('http://localhost/_next/image?url=%2Fimg.jpg&w=48&q=75')
  })

  it('renders a avatar with source link', () => {
    const avatar = render(
      <Avatar
        width={20}
        height={20}
        src="https://www.shutterstock.com/image-vector/certificate-handout-creative-painting-line-icons-1979886350"
        alt="out-source"
      />
    )

    const image = screen.getByAltText('out-source') as HTMLImageElement
    expect(image.src).toContain(
      'http://localhost/_next/image?url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fcertificate-handout-creative-painting-line-icons-1979886350&w=48&q=75'
    )
  })
})
