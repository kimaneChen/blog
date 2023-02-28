import { FC } from 'react'
import Image from 'next/image'
import members from './members'

const getFormattedURL = (link: string): string => {
  const url = new URL(link)
  return url.hostname.replace('www.', '') + url.pathname
}

const TeamCards: FC = () => (
  <div className="mb-[10rem]">
    <h2 className="text-xl font-bold text-center mb-10">Our Team Members</h2>
    <div className="grid grid-cols-3 gap-10">
      {members.map(({ imgSrc, name, title, link }) => (
        <div
          className="py-9 text-center rounded-xl shadow-[2px_2px_20px] shadow-[#f36f3724]"
          key={link}
        >
          <Image
            src={imgSrc}
            alt={`Profile photo for ${name}`}
            width={50}
            height={50}
            className="mx-auto rounded-full mb-3"
          />
          <p className="text-lg font-medium mb-1">{name}</p>
          <p className="text-base text-on-background mb-6">{title}</p>
          <a href={link} className="font-sm text-link" target="_blank" rel="noreferrer">
            {getFormattedURL(link)}
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default TeamCards
