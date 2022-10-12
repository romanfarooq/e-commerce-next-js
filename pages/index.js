import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="E-Commerce -- your own shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen">
        E-Commerce
      </div>
    </div>
  );
}
