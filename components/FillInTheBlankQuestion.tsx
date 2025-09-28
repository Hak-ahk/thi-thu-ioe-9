import React, { useState, useEffect, useMemo } from 'react';
import { FillInTheBlankQuestionType } from '../types';

interface FillInTheBlankQuestionProps {
  question: FillInTheBlankQuestionType;
  isAnswered: boolean;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  showMessage: (text: string, type: 'info') => void;
  questionIndex: number;
}

const FillInTheBlankQuestion: React.FC<FillInTheBlankQuestionProps> = ({ question, isAnswered, onSubmit, showMessage, questionIndex }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue('');
  }, [question]);

  const handleSubmitClick = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput === '') {
      showMessage('Vui lòng điền câu trả lời của bạn!', 'info');
      return;
    }
    const isCorrect = trimmedInput.toLowerCase() === question.correctAnswer.toLowerCase();
    onSubmit(trimmedInput, isCorrect);
  };

  const [beforeText, afterText] = useMemo(() => {
    const placeholder = '____';
    if (question.question.includes(placeholder)) {
      const parts = question.question.split(placeholder);
      return [parts[0], parts.slice(1).join(placeholder)];
    }
    // Fallback for questions that might not have the placeholder
    return [question.question, ''];
  }, [question.question]);

  const answerLength = question.correctAnswer.length;

  let inputClasses = 'inline-block mx-2 p-2 border-2 rounded-lg text-lg text-center shadow-sm transition duration-200 align-baseline w-48';
  if (isAnswered) {
    const isSubmissionCorrect = inputValue.trim().toLowerCase() === question.correctAnswer.toLowerCase();
    inputClasses += isSubmissionCorrect ? ' border-green-500 bg-green-50' : ' border-red-500 bg-red-50';
  } else {
    inputClasses += ' border-gray-300 focus:border-blue-500';
  }

  return (
    <div className="space-y-4">
      <div className="text-xl sm:text-2xl font-semibold mb-6 leading-relaxed text-center flex justify-center items-center flex-wrap">
        <span>{questionIndex + 1}. </span>
        {beforeText && <span className="ml-1">{beforeText}</span>}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isAnswered}
          maxLength={answerLength}
          placeholder="Điền từ"
          className={inputClasses}
          onKeyPress={(e) => e.key === 'Enter' && !isAnswered && handleSubmitClick()}
          aria-label="Fill in the blank"
        />
        {afterText && <span>{afterText}</span>}
      </div>
      <button
        onClick={handleSubmitClick}
        disabled={isAnswered}
        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-green-700 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Kiểm Tra Câu Trả Lời
      </button>
    </div>
  );
};

export default FillInTheBlankQuestion;