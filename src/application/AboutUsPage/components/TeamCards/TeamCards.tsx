import { FC } from 'react'
import Image from 'next/image'
import Container, { Size } from '@/components/Container'
import members from './members'
import linkedin from './assets/linkedin.svg'

const TeamCards: FC = () => (
  <Container size={Size.Narrow} className="mb-40">
    <h2 className="text-2xl font-bold text-center mb-10">Our Team Members</h2>
    <div className="grid grid-cols-3 gap-10">
      {members.map(({ svg, name, title, link }) => (
        <div
          className="py-9 px-10 text-center rounded-xl shadow-[2px_2px_20px] shadow-[#f36f3724]"
          key={link}
        >
          <Image
            src={svg}
            alt={`Profile photo for ${name}`}
            width={50}
            height={50}
            className="mx-auto rounded-full mb-3 border"
          />
          <p className="text-lg font-medium mb-1">{name}</p>
          <p className="text-base text-on-background mb-6">{title}</p>
          <a href={link} className="font-sm text-link" target="_blank" rel="noreferrer">
            <div className="flex justify-center">
              <Image src={linkedin} alt="LinkedIn" width={58} height={16} />
            </div>
          </a>
        </div>
      ))}
    </div>
  </Container>
)

export default TeamCards
