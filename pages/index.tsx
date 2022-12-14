import Head from "next/head";

import getLayout from "@components/common/getLayout";
import ProductsCatalog from "@components/UI/templates/ProductsCatalog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fancy store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductsCatalog />
      </main>
    </>
  );
}

Home.getLayout = getLayout;
