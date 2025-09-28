import React, { useState, useEffect, useCallback } from 'react';
import { questions } from '../data/questions';
import { Question, RearrangeQuestionType, MultipleChoiceQuestionType, FillInTheBlankQuestionType } from '../types';
import ProgressBar from './ProgressBar';
import RearrangeQuestion from './RearrangeQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import FillInTheBlankQuestion from './FillInTheBlankQuestion';
import RationaleBox from './RationaleBox';
import MessageBox from './MessageBox';

interface QuizScreenProps {
  playerName: string;
  onEnd: (finalScore: number) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ playerName, onEnd }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [scoredThisQuestion, setScoredThisQuestion] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm to randomize questions
    const array = [...questions];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledQuestions(array);
  }, []);

  const currentQuestion: Question | undefined = shuffledQuestions[currentQuestionIndex];

  useEffect(() => {
    setIsAnswered(false);
    setScoredThisQuestion(false);
    setIsCorrect(false);
    setSubmittedAnswer('');
    setMessage(null);
  }, [currentQuestionIndex]);
  
  const showMessage = (text: string, type: 'success' | 'error' | 'info') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSubmit = useCallback((answer: string, isAnswerCorrect: boolean) => {
    if (isAnswered) return;
    
    setIsAnswered(true);
    setSubmittedAnswer(answer);
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect && !scoredThisQuestion) {
      setScore(prev => prev + 10);
      setScoredThisQuestion(true);
      showMessage('CHÍNH XÁC! +10 điểm. Tuyệt vời!', 'success');
    } else if (isAnswerCorrect && scoredThisQuestion) {
      showMessage('CHÍNH XÁC! Nhưng điểm đã được tính rồi.', 'info');
    } else {
      showMessage('SAI RỒI! Vui lòng xem giải thích và học hỏi.', 'error');
    }
  }, [isAnswered, scoredThisQuestion]);

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onEnd(score);
    }
  };

  if (shuffledQuestions.length === 0 || !currentQuestion) {
    return <div className="text-center p-8">Đang tải câu hỏi...</div>;
  }

  const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
  
  const renderQuestionComponent = () => {
    const commonProps = {
      isAnswered,
      onSubmit: handleSubmit,
      showMessage,
      questionIndex: currentQuestionIndex,
    };

    switch (currentQuestion.type) {
      case 'rearrange':
        return <RearrangeQuestion question={currentQuestion as RearrangeQuestionType} {...commonProps} />;
      case 'mc':
        return <MultipleChoiceQuestion question={currentQuestion as MultipleChoiceQuestionType} {...commonProps} />;
      case 'fill-in-the-blank':
        return <FillInTheBlankQuestion question={currentQuestion as FillInTheBlankQuestionType} {...commonProps} />;
      default:
        return null;
    }
  };


  return (
    <div className="fade-in">
      {message && <MessageBox message={message.text} type={message.type} />}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">Bài Thi Thử IOE 9.2</h1>
        <p className="text-lg text-gray-500">Sắp xếp câu & Trắc nghiệm Tiếng Anh</p>
        <ProgressBar percentage={progressPercentage} />
      </header>

      <div className="flex justify-between items-center mb-6 py-2 px-4 bg-blue-50 rounded-lg shadow-inner">
        <p className="text-sm sm:text-base font-medium text-blue-800">Người chơi: <span className="font-bold">{playerName}</span></p>
        <p className="text-sm sm:text-base font-medium text-blue-800">Điểm: <span className="text-xl font-extrabold text-red-600">{score}</span></p>
        <p className="text-sm sm:text-base font-medium text-blue-800">Tiến độ: <span className="font-bold">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span></p>
      </div>

      <div className="mb-8">
        {renderQuestionComponent()}
      </div>

      <div className="mt-8 border-t pt-6">
         <div className="relative inline-block">
            <button
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:bg-yellow-600 active:scale-95"
              onMouseEnter={() => setIsHintVisible(true)}
              onMouseLeave={() => setIsHintVisible(false)}
              onTouchStart={() => setIsHintVisible(true)}
              onTouchEnd={() => setIsHintVisible(false)}
            >
              Giữ để xem Gợi ý
            </button>
            <div id="hint-box" className={`absolute bottom-full mb-2 w-max max-w-sm p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg transition-opacity duration-300 ${isHintVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="font-semibold text-yellow-800">Gợi ý (Hint):</p>
              <p className="text-yellow-700">{currentQuestion.hint_vi}</p>
              <p className="text-yellow-700 italic mt-1 text-sm">{currentQuestion.hint_en}</p>
            </div>
         </div>
      </div>

      {isAnswered && (
          <RationaleBox question={currentQuestion} isCorrect={isCorrect} submittedAnswer={submittedAnswer} />
      )}

      <button onClick={handleNext} disabled={!isAnswered} className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-xl transition duration-300 hover:bg-blue-600 mt-8 disabled:bg-gray-400 disabled:cursor-not-allowed">
        {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Hoàn thành' : 'Tiếp Theo »'}
      </button>
    </div>
  );
};

export default QuizScreen;