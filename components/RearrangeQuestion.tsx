import React, { useState, useEffect, useMemo } from 'react';
import { RearrangeQuestionType, WordBlockItem } from '../types';

interface RearrangeQuestionProps {
  question: RearrangeQuestionType;
  isAnswered: boolean;
  onSubmit: (answer: string, isCorrect: boolean) => void;
  showMessage: (text: string, type: 'info') => void;
  questionIndex: number;
}

// Word block component defined outside to prevent re-creation on renders
const WordBlock: React.FC<{ word: WordBlockItem; onClick: () => void; isSource: boolean; isAnswered: boolean }> = ({ word, onClick, isSource, isAnswered }) => {
    const baseClasses = 'word-block px-3 py-2 font-semibold rounded-lg shadow-sm transition-all duration-150 break-words';
    const sourceClasses = isSource ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 'bg-gray-100 text-gray-800';
    const disabledClasses = 'opacity-60 cursor-default';
    const interactiveClasses = 'cursor-pointer';

    return (
        <span
            onClick={!isAnswered ? onClick : undefined}
            className={`${baseClasses} ${sourceClasses} ${isAnswered ? disabledClasses : interactiveClasses}`}
        >
            {word.text}
        </span>
    );
};


const RearrangeQuestion: React.FC<RearrangeQuestionProps> = ({ question, isAnswered, onSubmit, showMessage, questionIndex }) => {
  const [sentenceWords, setSentenceWords] = useState<WordBlockItem[]>([]);
  
  const initialSourceWords = useMemo(() => {
    return [...question.words]
      .sort(() => Math.random() - 0.5)
      .map((text, id) => ({ id, text }));
  }, [question]);

  const [sourceWords, setSourceWords] = useState<WordBlockItem[]>(initialSourceWords);

  useEffect(() => {
    const newSourceWords = [...question.words]
      .sort(() => Math.random() - 0.5)
      .map((text, id) => ({ id, text }));
    setSourceWords(newSourceWords);
    setSentenceWords([]);
  }, [question]);

  const handleSelectWord = (word: WordBlockItem) => {
    setSourceWords(prev => prev.filter(w => w.id !== word.id));
    setSentenceWords(prev => [...prev, word]);
  };

  const handleReturnWord = (word: WordBlockItem) => {
    setSentenceWords(prev => prev.filter(w => w.id !== word.id));
    setSourceWords(prev => [...prev, word]);
  };

  const handleSubmitClick = () => {
    if (sentenceWords.length === 0) {
      showMessage('Vui lòng sắp xếp các từ trước khi kiểm tra!', 'info');
      return;
    }
    const submitted = sentenceWords.map(w => w.text).join(' ').replace(/\s+([.,?!])/g, '$1').trim();
    const correct = question.correctAnswer.replace(/\s+([.,?!])/g, '$1').trim();
    
    const normalize = (str: string) => str.replace(/[.,?!]/g, '').replace(/\s+/g, ' ').toLowerCase().trim();
    
    const isCorrect = normalize(submitted) === normalize(correct);
    onSubmit(submitted, isCorrect);
  };

  return (
    <>
      <h3
        className="text-xl sm:text-2xl font-semibold mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: `${questionIndex + 1}. ${question.question}` }}
      />
      <div className="space-y-4">
        <div className="min-h-[60px] p-3 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 shadow-inner flex flex-wrap gap-2 items-center">
          {sentenceWords.length === 0 && !isAnswered ? (
            <span className="text-gray-500 italic text-sm">Xây dựng câu trả lời tại đây...</span>
          ) : (
            sentenceWords.map(word => (
              <WordBlock key={word.id} word={word} onClick={() => handleReturnWord(word)} isSource={false} isAnswered={isAnswered} />
            ))
          )}
        </div>
        <div className="min-h-[100px] p-4 bg-gray-100 rounded-lg shadow-md flex flex-wrap gap-2 items-center border border-gray-200">
          {sourceWords.map(word => (
              <WordBlock key={word.id} word={word} onClick={() => handleSelectWord(word)} isSource={true} isAnswered={isAnswered} />
          ))}
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

export default RearrangeQuestion;