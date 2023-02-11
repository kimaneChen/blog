import Notification, { Type } from '@/types/Notification'

const MOCKNOTIFICATIONS: Notification[] = [
  {
    title: 'How to build a Fullstack App with Next.js, Prisma and PostgreSQL',
    responses: [
      {
        id: '0001',
        inline: 'next-generation...',
        type: Type.Comment,
        relativeTime: '12h ago',
        isChecked: true,
        content:
          'Next.js has two forms of pre-rendering Static Gerneration and Server-side rendering',
      },
      {
        id: '0002',
        type: Type.Reply,
        relativeTime: '12h ago',
        content: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: '0003',
        type: Type.React,
        relativeTime: '12h ago',
        content: '👍',
      },
    ],
  },
  {
    title: 'How to build a Fullstack App with Next.js, Prisma and PostgreSQL',
    inline: 'next-generation....',
    responses: [
      {
        id: '0004',
        type: Type.Reply,
        relativeTime: '12h ago',
        content: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: '0005',
        type: Type.React,
        relativeTime: '12h ago',
        content: '👍',
      },
    ],
  },
]

export default MOCKNOTIFICATIONS
