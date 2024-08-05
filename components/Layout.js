import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>QnA Review</title>
        <meta
          name="description"
          content="QnA Review - Transform your reading into insights"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-primary text-white text-center py-4">
        © {new Date().getFullYear()} QnA Review. All rights reserved.
      </footer>
    </>
  );
}
