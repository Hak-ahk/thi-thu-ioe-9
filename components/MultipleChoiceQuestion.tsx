import React, { useState, useEffect } from 'react';
import { MultipleChoiceQuestionType } from '../types';

interface MultipleChoiceQuestionProps {
  question: MultipleChoiceQuestionType;
  isAnswered: boolean;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  showMessage: (text: string, type: 'info') => void;
  questionIndex: number;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question, isAnswered, onSubmit, showMessage, questionIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [question]);

  const handleSubmitClick = () => {
    if (selectedIndex === null) {
      showMessage('Vui lòng chọn một đáp án trước khi kiểm tra!', 'info');
      return;
    }
    const selectedOption = question.options[selectedIndex];
    onSubmit(selectedOption.text, selectedOption.isCorrect);
  };

  return (
    <>
      <h3
        className="text-xl sm:text-2xl font-semibold mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: `${questionIndex + 1}. ${question.question}` }}
      />
      <div className="space-y-3">
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            let labelClasses = "block p-4 border-2 border-gray-200 rounded-lg shadow-sm text-lg transition duration-200";

            if (isAnswered) {
              labelClasses += " cursor-default";
              if (option.isCorrect) {
                  labelClasses += " bg-green-100 border-green-500";
              } else if (isSelected) {
                  labelClasses += " bg-red-100 border-red-500";
              }
            } else {
              labelClasses += " cursor-pointer hover:bg-blue-50 hover:border-blue-300";
              if(isSelected) {
                  labelClasses += " bg-blue-100 border-blue-500";
              }
            }

            return (
              <div key={index} className="relative">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="mc-option"
                  value={index}
                  className="hidden"
                  checked={isSelected}
                  onChange={() => setSelectedIndex(index)}
                  disabled={isAnswered}
                />
                <label htmlFor={`option-${index}`} className={labelClasses}>
                  {option.text}
                </label>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleSubmitClick}
          disabled={isAnswered}
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-green-700 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Kiểm Tra Câu Trả Lời
        </button>
      </div>
    </>
  );
};

export default MultipleChoiceQuestion;