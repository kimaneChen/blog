export const MYCOMMENTS = [
  {
    id: 'comment_1_reply_1',
    parentId: 'comment_1',
    user: {
      id: 'jeremyhuang',
      name: 'Jeremy Huang',
      image: 'https://avatars.dicebear.com/api/avataaars/jeremyhuang.svg',
    },
    createdAt: '15 minutes ago',
    updatedAt: '15 minutes ago',
    comment: "Thanks for your comment. (This is my first reply to John Doe's comment 1)",
    replies: [
      {
        id: 'comment_1_reply_1_1',
        parentId: 'comment_1_reply_1',
        user: {
          id: 'johndoe',
          name: 'John Doe',
          image: 'https://avatars.dicebear.com/api/avataaars/johndoe.svg',
        },
        createdAt: '5 minutes ago',
        updatedAt: '5 minutes ago',
        comment: "This is John Doe's reply to my reply",
        replies: [],
      },
    ],
  },
  {
    id: 'comment_2_reply_1_1',
    parentId: 'comment_2_reply_1',
    user: {
      id: 'jeremyhuang',
      name: 'Jeremy Huang',
      image: 'https://avatars.dicebear.com/api/avataaars/jeremyhuang.svg',
    },
    createdAt: '1 hours ago',
    updatedAt: '1 hours ago',
    comment: "This is my reply to Jameson Lee's first reply about comment 2 for blog 1",
    replies: [
      {
        id: 'comment_2_reply_1_1_1',
        parentId: 'comment_2_reply_1_1',
        user: {
          id: 'jamesonlee',
          name: 'Jameson Lee',
          image: 'https://avatars.dicebear.com/api/avataaars/jamesonlee.svg',
        },
        createdAt: '30 minutes ago',
        updatedAt: '30 minutes ago',
        comment:
          'Jameson Lee replied me again with eu scelerisque lacinia proin placerat nunc vestibulum adipiscing tincidunt.',
        replies: [],
      },
    ],
  },
  {
    id: 'comment_2_reply_2',
    parentId: 'comment_2',
    user: {
      id: 'jeremyhuang',
      name: 'Jeremy Huang',
      image: 'https://avatars.dicebear.com/api/avataaars/jeremyhuang.svg',
    },
    createdAt: '1 hours ago',
    updatedAt: '1 hours ago',
    comment:
      'This is my reply for comment 2, and is the second reply for this comment. Jameson has one reply on comment 2 before me. Cum tempus aenean magna lectus tristique blandit semper tellus.',
    replies: [
      {
        id: 'comment_2_reply_2_1',
        parentId: 'comment_2_reply_2',
        user: {
          id: 'sophiasingh',
          name: 'Sophia Singh',
          image: 'https://avatars.dicebear.com/api/avataaars/sophiasingh.svg',
        },
        createdAt: '12 hours ago',
        updatedAt: '12 hours ago',
        comment:
          'Sophia replied me with lorem ipsum dolor sit amet consectetur. Turpis tristique pellentesque vulputate ullamcorper.',
        replies: [],
      },
    ],
  },
  {
    id: 'comment_4_reply_1',
    parentId: 'comment_4',
    user: {
      id: 'jeremyhuang',
      name: 'Jeremy Huang',
      image: 'https://avatars.dicebear.com/api/avataaars/jeremyhuang.svg',
    },
    createdAt: '3 hours ago',
    updatedAt: '3 hours ago',
    comment:
      'I made the first reply for comment 4. Lorem ipsum dolor sit amet consectetur. Turpis nibh malesuada egestas elementum pellentesque.',
    replies: [
      {
        id: 'comment_4_reply_1_1',
        parentId: 'comment_4_reply_1',
        user: {
          id: 'samueldavis',
          name: 'Samuel Davis',
          image: 'https://avatars.dicebear.com/api/avataaars/samueldavis.svg',
        },
        createdAt: '2 days ago',
        updatedAt: '2 days ago',
        comment:
          'Samuel replied me for my first reply. Adipiscing tempor tristique pretium pretium. Tincidunt euismod lobortis enim placerat tellus ullamcorper nulla nisi.',
        replies: [],
      },
      {
        id: 'comment_4_reply_1_2',
        parentId: 'comment_4_reply_1',
        user: {
          id: 'christophernguyen',
          name: 'Christopher Nguyen',
          image: 'https://avatars.dicebear.com/api/avataaars/christophernguyen.svg',
        },
        createdAt: '2 days ago',
        updatedAt: '2 days ago',
        comment:
          'Chris also replied me for my first reply. Tincidunt euismod lobortis enim placerat tellus ullamcorper nulla nisi.',
        replies: [],
      },
    ],
  },
  {
    id: 'comment_5',
    blogId: 'blog_3(others)',
    parentId: null,
    user: {
      id: 'jeremyhuang',
      name: 'Jeremy Huang',
      image: 'https://avatars.dicebear.com/api/avataaars/jeremyhuang.svg',
    },
    createdAt: '5 days ago',
    updatedAt: '5 days ago',
    comment:
      'This is my comment to others blog (comment 5). Lorem ipsum dolor sit amet consectetur. Lobortis elementum fermentum tristique et suscipit ut condimentum.',
    replies: [
      {
        id: 'comment_5_reply_1',
        parentId: 'comment_5',
        user: {
          id: 'michaelbrown',
          name: 'Michael Brown',
          image: 'https://avatars.dicebear.com/api/avataaars/michaelbrown.svg',
        },
        createdAt: '3 days ago',
        updatedAt: '3 days ago',
        comment:
          'Mike replied me for my comment to others blog. Lorem ipsum dolor sit amet consectetur.',
        replies: [],
      },
    ],
  },
]

const COMMENTS = [
  {
    id: 'comment_1',
    blogId: 'blog_1',
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
    replies: [MYCOMMENTS[0]],
  },
  {
    id: 'comment_2',
    blogId: 'blog_1',
    parentId: null,
    user: {
      id: 'emmajohnson',
      name: 'Emma Johnson',
      image: 'https://avatars.dicebear.com/api/avataaars/emmajohnson.svg',
    },
    createdAt: '12 hours ago',
    updatedAt: '12 hours ago',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [
      {
        id: 'comment_2_reply_1',
        parentId: 'comment_2',
        user: {
          id: 'jamesonlee',
          name: 'Jameson Lee',
          image: 'https://avatars.dicebear.com/api/avataaars/jamesonlee.svg',
        },
        createdAt: '2 hours ago',
        updatedAt: '2 hours ago',
        comment:
          'Lorem ipsum dolor sit amet consectetur. Et quam eu fringilla ac pharetra varius diam cras vestibulum. Ultricies eu scelerisque lacinia proin placerat nunc vestibulum adipiscing tincidunt. Cum tempus aenean magna lectus tristique blandit semper tellus.',
        replies: [MYCOMMENTS[1]],
      },
      MYCOMMENTS[2],
    ],
  },
  {
    id: 'comment_3',
    blogId: 'blog_1',
    parentId: null,
    user: {
      id: 'ethanwong',
      name: 'Ethan Wong',
      image: 'https://avatars.dicebear.com/api/avataaars/ethanwong.svg',
    },
    createdAt: '1 day ago',
    updatedAt: '1 day ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Turpis nibh malesuada egestas elementum pellentesque. Adipiscing tempor tristique pretium pretium. Tincidunt euismod lobortis enim placerat tellus ullamcorper nulla nisi.',
    replies: [
      {
        id: 'comment_3_reply_1',
        parentId: 'comment_3',
        user: {
          id: 'isabellabrown',
          name: 'Isabella Brown',
          image: 'https://avatars.dicebear.com/api/avataaars/isabellabrown.svg',
        },
        createdAt: '3 hours ago',
        updatedAt: '3 hours ago',
        comment:
          'Adipiscing tempor tristique pretium pretium. Tincidunt euismod lobortis enim placerat tellus ullamcorper nulla nisi.',
        replies: [],
      },
    ],
  },
  {
    id: 'comment_4',
    blogId: 'blog_2',
    parentId: null,
    user: {
      id: 'lucaswright',
      name: 'Lucas Wright',
      image: 'https://avatars.dicebear.com/api/avataaars/lucaswright.svg',
    },
    createdAt: '3 days ago',
    updatedAt: '3 days ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Turpis nibh malesuada egestas elementum pellentesque. Adipiscing tempor tristique pretium pretium. Tincidunt euismod lobortis enim placerat tellus ullamcorper nulla nisi.',
    replies: [MYCOMMENTS[3]],
  },
  MYCOMMENTS[4],
  {
    id: 'comment_6',
    blogId: 'blog_2',
    parentId: null,
    user: {
      id: 'benjaminkim',
      name: 'Benjamin Kim',
      image: 'https://avatars.dicebear.com/api/avataaars/benjaminkim.svg',
    },
    createdAt: 'Feb 20th 2023',
    updatedAt: 'Feb 20th 2023',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
    replies: [],
  },
]

export const MYBLOGSWITHCOMMENTS = [
  {
    id: 'blog_1',
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL (this is my blog title)',
    comments: COMMENTS.filter((comment) => comment.blogId === 'blog_1'),
  },
  {
    id: 'blog_2',
    title: 'Using AJAX to Improve User Experience',
    comments: COMMENTS.filter((comment) => comment.blogId === 'blog_2'),
  },
]
