import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// URL 유효성 검사 함수
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// 환경 변수 검증
if (!supabaseUrl || !isValidUrl(supabaseUrl)) {
  console.error("Invalid or missing NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl);
  throw new Error("Valid NEXT_PUBLIC_SUPABASE_URL is required");
}

if (!supabaseAnonKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is required");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveBookToSupabase(bookData) {
  const { data, error } = await supabase.from("books").upsert(
    {
      google_books_id: bookData.id,
      title: bookData.title,
      authors: bookData.authors,
      published_date: bookData.publishedDate,
      categories: bookData.categories,
      description: bookData.description,
    },
    {
      onConflict: "google_books_id",
    }
  );

  if (error) {
    console.error("Error saving book to Supabase:", error);
    return null;
  }
  return data;
}
