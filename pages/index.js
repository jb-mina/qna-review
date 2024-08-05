import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to QnA Review</h1>
      <p className="mb-4">
        Transform your reading into personal insights and creative expression.
      </p>
      <Link
        href="/stories/new"
        className="bg-primary text-white font-bold py-2 px-4 rounded"
      >
        Start a New Story
      </Link>
    </div>
  );
}
