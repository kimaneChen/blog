import { FC } from 'react'
import Image from 'next/image'
import members from './members'
import linkedin from './assets/linkedin.svg'

const TeamCards: FC = () => (
  <div className="mt-20 md:mb-40">
    <h2 className="text-base md:text-2xl font-bold text-center mb-6 md:mb-10">Our Team Members</h2>
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-6">
      {members.map(({ svg, name, title, link }) => (
        <div
          className="md:p-6 text-center rounded-xl shadow-[2px_2px_20px] shadow-[#f36f3724]"
          key={link}
        >
          <Image
            src={svg}
            alt={`Profile photo for ${name}`}
            width={50}
            height={50}
            className="mx-auto rounded-full mb-3 border"
          />
          <p className="md:text-lg font-medium mb-1">{name}</p>
          <div className="text-sm md:text-base text-on-background md:mb-6">{title}</div>
          <a href={link} className="font-sm text-link" target="_blank" rel="noreferrer">
            <Image src={linkedin} alt="LinkedIn" width={58} height={16} className="mx-auto" />
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default TeamCards
