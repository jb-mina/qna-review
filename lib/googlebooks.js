import axios from "axios";

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

export async function searchBooks(query) {
  try {
    const response = await axios.get(GOOGLE_BOOKS_API_URL, {
      params: {
        q: query,
        key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
      },
    });
    return response.data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || [],
      publishedDate: item.volumeInfo.publishedDate,
      categories: item.volumeInfo.categories || [],
      description: item.volumeInfo.description,
    }));
  } catch (error) {
    console.error("Error searching books:", error);
    return [];
  }
}
