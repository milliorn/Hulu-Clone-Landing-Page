import Head from "next/head";

export function GlobalHead(): JSX.Element {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Watch TV shows and movies online. Stream TV episodes of Grey's Anatomy, This Is Us, Bob's Burgers, Brooklyn Nine-Nine, Empire, SNL, and popular movies on your favorite devices. Start your free trial now. Cancel anytime."
        key="desc" />
      <title>Stream TV and Movies Live and Online | Hulu</title>
    </Head>
  );
}
