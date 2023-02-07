import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Blog {
  title: string
  description: string
}

interface User {
  name: string
  email: string
  image: string
  blogs: Blog[]
}

const DATA: User[] = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://i.pravatar.cc/150?u=johndoe@example.com',
    blogs: [
      {
        title: 'How to Build a Simple REST API with Django',
        description:
          'This article will provide a step-by-step guide on building a simple REST API using Django, a popular web framework for Python. It will cover the basics of REST API design, the setup of a Django project, and the creation of views, serializers, and URL patterns.',
      },
      {
        title: "Getting Started with Machine Learning: A Beginner's Guide",
        description:
          'This article is an introduction to machine learning for those who are new to the field. It will cover the basics of what machine learning is, the types of problems it can solve, and how to get started with your first machine learning project.',
      },
      {
        title: 'Understanding Blockchain Technology and Its Applications',
        description:
          'This article will provide an overview of blockchain technology, including its origins, how it works, and its potential use cases. It will also discuss the benefits and challenges of using blockchain technology in various industries.',
      },
      {
        title: 'The Benefits and Challenges of Serverless Computing',
        description:
          'This article will examine the advantages and disadvantages of serverless computing, a new paradigm in cloud computing. It will look at the cost benefits, scalability, and flexibility of serverless, as well as some of the potential security risks and limitations.',
      },
      {
        title: 'Top 10 Front-End Development Tools for 2021',
        description:
          'This article will highlight the top 10 front-end development tools for 2021. It will provide an overview of each tool, including its key features, benefits, and use cases, to help developers make informed decisions about which tools to use for their projects.',
      },
      {
        title: 'How to Secure Your Website from Cyber Attacks',
        description:
          'This article will provide tips and best practices for securing a website from cyber attacks. It will cover topics such as strong passwords, secure hosting, SSL certificates, and regularly updating software.',
      },
      {
        title: 'The Future of Virtual Reality in Gaming and Beyond',
        description:
          'This article will explore the future of virtual reality and its potential impact on the gaming industry and other areas, such as education, medicine, and entertainment. It will discuss current trends, advancements in VR technology, and the future of VR experiences.',
      },
      {
        title: 'An Introduction to Artificial Intelligence and its Use Cases',
        description:
          'This article will provide a basic introduction to artificial intelligence, including its history, definitions, and applications. It will also highlight some of the current and potential use cases of AI in various industries.',
      },
      {
        title: "5 Essential Tips for Optimizing Your Website's Performance",
        description:
          "This article will provide five essential tips for optimizing a website's performance, including load times, website speed, and user experience. It will cover topics such as caching, minification, and server optimization.",
      },
      {
        title: 'How to Build a Chatbot Using Dialogflow',
        description:
          'This article will provide a step-by-step guide for building a chatbot using Dialogflow, a popular platform for developing conversational AI. It will cover the basics of chatbot design, the setup of a Dialogflow project, and the creation of intents, entities',
      },
    ],
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    image: 'https://i.pravatar.cc/150?u=janesmith@example.com',
    blogs: [
      {
        title: 'React Basics',
        description:
          'An introduction to React, including what it is, how to set up a development environment, and how to build your first component.',
      },
      {
        title: 'React Router for Single-Page Apps',
        description:
          'An overview of how to use React Router to build single-page apps, including how to set up routing, create links, and use dynamic routing.',
      },
    ],
  },
  {
    name: 'Jim Brown',
    email: 'jimbrown@example.com',
    image: 'https://i.pravatar.cc/150?u=jimbrown@example.com',
    blogs: [
      {
        title: 'Introduction to GraphQL',
        description:
          "An overview of GraphQL, including what it is, why it's useful, and how to set up a GraphQL API.",
      },
      {
        title: 'Advanced GraphQL Techniques',
        description:
          'Tips and tricks for working with GraphQL, including how to write complex queries, handle authentication, and deal with errors.',
      },
    ],
  },
]

const upsertUser = async (user: User): Promise<void> => {
  const { blogs, ...rest } = user

  await prisma.user.upsert({
    where: {
      email: user.email,
    },
    update: {},
    create: {
      ...rest,
      blogs: {
        create: blogs,
      },
    },
  })
}

const main = async (): Promise<void> => {
  await Promise.all(DATA.map(upsertUser))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
