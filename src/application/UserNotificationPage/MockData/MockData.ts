const BLOGSWITHCOMMENTS = [
  {
    id: '1',
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL (this is my blog title)',
    comments: [
      {
        id: 'comment_1',
        parentId: null,
        user: {
          id: 'johndoe',
          name: 'John Doe',
          image: 'https://avatars.dicebear.com/api/avataaars/johndoe.svg',
        },
        createdAt: '40 minutes ago',
        updatedAt: '40 minutes ago',
        comment:
          "Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. (This is comment's content)",
      },
      {
        id: 'comment_2',
        parentId: null,
        user: {
          id: 'emmajohnson',
          name: 'Emma Johnson',
          image: 'https://avatars.dicebear.com/api/avataaars/emmajohnson.svg',
        },
        createdAt: '12 hours ago',
        updatedAt: '12 hours ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 'comment_3',
        parentId: null,
        user: {
          id: 'alexanderlee',
          name: 'Alexander Lee',
          image: 'https://avatars.dicebear.com/api/avataaars/alexanderlee.svg',
        },
        createdAt: '1 day ago',
        updatedAt: '1 day ago',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Turpis nibh malesuada egestas elementum pellentesque. Adipiscing tempor tristique pretium pretium. Tincidunt euismod lobortis enim placerat tellus ullamcorper nulla nisi.',
      },
    ],
  },
  {
    id: '2',
    title: 'Using AJAX to Improve User Experience',
    comments: [
      {
        id: 'comment_1',
        parentId: null,
        user: {
          id: 'oliviamartinez',
          name: 'Olivia Martinez',
          image: 'https://avatars.dicebear.com/api/avataaars/oliviamartinez.svg',
        },
        createdAt: '50 minutes ago',
        updatedAt: '50 minutes ago',
        comment:
          'Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.',
      },
      {
        id: 'comment_2',
        parentId: null,
        user: {
          id: 'ethanwong',
          name: 'Ethan Wong',
          image: 'https://avatars.dicebear.com/api/avataaars/ethanwong.svg',
        },
        createdAt: '20 hours ago',
        updatedAt: '20 hours ago',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Arcu nulla rhoncus quis et varius. Nisi eget morbi amet vel risus amet tristique blandit eget. Sodales vitae amet amet dictum amet pellentesque. Tempor semper felis a quisque tincidunt. Auctor varius viverra ut eu.',
      },
      {
        id: 'comment_3',
        parentId: null,
        user: {
          id: 'avapatel',
          name: 'Ava Patel',
          image: 'https://avatars.dicebear.com/api/avataaars/avapatel.svg',
        },
        createdAt: '2 days ago',
        updatedAt: '2 days ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 'comment_4',
        parentId: null,
        user: {
          id: 'benjaminkim',
          name: 'Benjamin Kim',
          image: 'https://avatars.dicebear.com/api/avataaars/benjaminkim.svg',
        },
        createdAt: 'Feb 20th 2023',
        updatedAt: 'Feb 20th 2023',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Lobortis elementum fermentum tristique et suscipit ut condimentum.',
      },
      {
        id: 'comment_5',
        parentId: null,
        user: {
          id: 'sophiasingh',
          name: 'Sophia Singh',
          image: 'https://avatars.dicebear.com/api/avataaars/sophiasingh.svg',
        },
        createdAt: 'Jan 30th 2023',
        updatedAt: 'Jan 30th 2023',
        comment: 'Lorem ipsum dolor',
      },
    ],
  },
]

export default BLOGSWITHCOMMENTS
