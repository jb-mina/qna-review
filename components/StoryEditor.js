import { useState } from 'react'

export default function StoryEditor({ initialContent }) {
  const [content, setContent] = useState(initialContent || '')

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving story:', content)
  }

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        rows="10"
      />
      <button onClick={handleSave} className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded">
        Save Story
      </button>
    </div>
  )
}
