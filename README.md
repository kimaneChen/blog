# Next.js Blog Website

This is a blog website built with Next.js. The website features a simple, responsive design and allows users to create and manage blog posts, as well as comment on posts and leave in-text comments.

## Features

- User authentication: Users can sign up for an account, log in, and log out.
- Blog post creation and management: Users can create, edit, and delete blog posts.
- Commenting: Users can leave comments on blog posts.
- In-text commenting: Users can highlight text in blog posts and leave comments on specific sections.
- Dynamic routing: Each blog post has its own dynamically generated URL, making it easy to share and link to individual posts.
- Responsive design: The website is designed to be fully responsive and mobile-friendly.

## Technologies Used

The blog website is built with the following technologies:

- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered applications.
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open-source relational database.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [Prisma](https://www.prisma.io/) - A modern database toolkit for building type-safe, scalable, and fast APIs with TypeScript and Node.js.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [NextAuth](https://next-auth.js.org/) - A complete authentication solution for Next.js apps.
- [EditorJS](https://editorjs.io/) - A block-style editor for creating rich content.
- [SWR](https://swr.vercel.app/) - A React hook for data fetching.
- [Zod](https://github.com/colinhacks/zod) - A TypeScript-first schema validation library.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Prettier](https://prettier.io/) - A code formatter that ensures consistent code style.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install`.
3. Create a local `.env.local` file and fill in the necessary environment variables. You can use the `.env.example` file as a template.
4. Generate the Prisma client by running the following command: `npx dotenv-cli -e .env.local -- npx prisma generate`
5. Reset the database by running the following command: `npx dotenv-cli -e .env.local -- npx prisma migrate reset`
6. Start the development server by running `npm run dev`.
7. Open your web browser and navigate to `http://localhost:3000`.
8. Configure the policies of objects in storages to allow the inserting the picture to 'avatars' buckets
9. Test the project with npx dotenv-cli -e .env.local npm run test

## Managing the Database

The project uses [PostgreSQL](https://www.postgresql.org/) as the database. To apply any changes to the database schema, you need to follow the setup steps in the "Getting Started" section and ensure that you have set up the `.env.local` file with the `DATABASE_URL` environment variable.

Once you have completed the setup process, you can apply any schema changes by running the following command:

```
npx dotenv-cli -e .env.local -- npx prisma migrate dev
```

This will generate a new migration file in the `prisma/migrations` directory.

You should also generate the Prisma client by running the following command:

```
npx dotenv-cli -e .env.local -- npx prisma generate
```

## Types

Using types for request and response data helps ensure that the data is properly validated and formatted, reducing the likelihood of errors and bugs.

### Request

The project uses [Zod](https://github.com/colinhacks/zod) for schema validation and type inference. All request data should be validated against the schema defined in the `./src/schemas` folder, and the types should be inferred from the schema using Zod.

### Response

The response data should always have a corresponding type defined in the `./src/types` folder. The types should be based on and picked from the Prisma-generated types in `@prisma/client`. You may need to add any additional properties or overrides as needed.

## Code Quality

The project follows the principles of ["Thinking in React"](https://reactjs.org/docs/thinking-in-react.html), which emphasizes a component-based architecture and a focus on reusability, readability, and maintainability.

To maintain high code quality, all components should be well-organized, easy to understand, and reusable. Code should be properly formatted and follow the established code style to ensure consistency.

Additionally, when making changes to the codebase, it is important to consider the impact on readability, maintainability, and reusability. Refactoring and optimization should be done as necessary to maintain a high level of code quality.
