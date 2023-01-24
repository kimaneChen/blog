import Head from "next/head";
import prisma from "../../lib/prisma";

type Feed = {
  author: {
    name: string;
  };
  authorId: string;
  content: string;
  id: string;
  title: string;
};

export default function Home({ feed }: { feed: Feed[] }) {
  return (
    <>
      <Head>
        <title>Tech blog</title>
        <meta name="description" content="A blog specialized in technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <ul>
          {feed.map((post) => (
            <li key={post.id}>
              {post.title}, by {post.author.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};
