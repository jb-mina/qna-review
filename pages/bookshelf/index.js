// pages/bookshelf/index.js
import Link from "next/link";

export default function Bookshelf() {
  // TODO: Fetch user's books from API
  const books = [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Bookshelf</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="mb-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p>{book.author}</p>
              <Link
                href={`/stories/new?bookId=${book.id}`}
                className="text-primary hover:underline"
              >
                Write a story about this book
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Your bookshelf is empty. Start by searching for a book and creating a
          story!
        </p>
      )}
    </div>
  );
}
