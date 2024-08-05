// components/BookSearch.js
import { useState } from "react";
import { searchBooks } from "../lib/googlebooks";
import { saveBookToSupabase } from "../lib/supabase";

export default function BookSearch({ onBookSelect }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const results = await searchBooks(query);
    setBooks(results);
    setIsLoading(false);
  };

  const handleBookSelect = async (book) => {
    const savedBook = await saveBookToSupabase(book);
    if (savedBook) {
      onBookSelect(savedBook);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="mt-4">
          {books.map((book) => (
            <li
              key={book.id}
              onClick={() => handleBookSelect(book)}
              className="cursor-pointer hover:bg-gray-100 p-2"
            >
              {book.title} by {book.authors.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
