import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech blog</title>
        <meta name="description" content="A blog specialized in technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
