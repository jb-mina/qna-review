// pages/stories/index.js
import Link from "next/link";

export default function Stories() {
  // TODO: Fetch stories from API
  const stories = [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Stories</h1>
      {stories.length > 0 ? (
        <ul>
          {stories.map((story) => (
            <li key={story.id} className="mb-4">
              <Link
                href={`/stories/${story.id}`}
                className="text-primary hover:underline"
              >
                {story.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not created any stories yet.</p>
      )}
      <Link
        href="/stories/new"
        className="mt-4 inline-block bg-primary text-white font-bold py-2 px-4 rounded"
      >
        Create New Story
      </Link>
    </div>
  );
}
