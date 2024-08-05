// pages/stories/new.js
import { useState } from "react";
import BookSearch from "@/components/BookSearch";
import QuestionList from "@/components/QuestionList";
import StoryEditor from "@/components/StoryEditor";

export default function NewStory() {
  const [step, setStep] = useState("search");
  const [selectedBook, setSelectedBook] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [storyContent, setStoryContent] = useState("");

  const handleBookSelect = async (book) => {
    setSelectedBook(book);
    // TODO: Implement question generation based on the selected book
    // For now, we'll use placeholder questions
    setQuestions([
      "What was your favorite part of the book?",
      "How did the main character develop throughout the story?",
      "What themes did you notice in the book?",
    ]);
    setStep("questions");
  };

  const handleAnswersSubmit = (answers) => {
    // TODO: Implement story generation based on answers
    // For now, we'll use a placeholder story
    setStoryContent("This is a generated story based on your answers...");
    setStep("edit");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create a New Story</h1>
      {step === "search" && <BookSearch onBookSelect={handleBookSelect} />}
      {step === "questions" && (
        <QuestionList
          book={selectedBook}
          questions={questions}
          onSubmit={handleAnswersSubmit}
        />
      )}
      {step === "edit" && <StoryEditor initialContent={storyContent} />}
    </div>
  );
}
