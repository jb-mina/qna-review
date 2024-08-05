import { useState } from "react";

export default function QuestionList({ book, questions }) {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle submission of answers
    console.log("Submitting answers:", answers);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{book?.title}</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <label className="block mb-2">{question.text}</label>
            <textarea
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-primary text-white font-bold py-2 px-4 rounded"
        >
          Submit Answers
        </button>
      </form>
    </div>
  );
}
