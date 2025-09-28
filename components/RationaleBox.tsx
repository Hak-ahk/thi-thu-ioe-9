import React from 'react';
import { Question } from '../types';

interface RationaleBoxProps {
    question: Question;
    isCorrect: boolean;
    submittedAnswer: string;
}

const RationaleBox: React.FC<RationaleBoxProps> = ({ question, isCorrect, submittedAnswer }) => {
    const boxClasses = `mt-6 p-4 rounded-lg border transition duration-300 fade-in border-l-4 ${
        isCorrect ? 'bg-green-100 border-green-600' : 'bg-red-100 border-red-600'
    }`;
    
    const submittedAnswerDisplay = () => {
        if(isCorrect && question.type === 'rearrange') return null; // Don't show if correct for rearrange
        if(isCorrect && question.type === 'mc') return null; // Don't show for mc at all as it's visually highlighted
        
        return (
            <>
                <strong>{question.type === 'mc' ? 'Bạn đã chọn: ' : 'Câu trả lời của bạn: '}</strong>
                <span className="text-red-700 font-medium">{submittedAnswer}</span>
                <br/>
                <strong className="text-sm italic">{question.type === 'mc' ? 'You chose: ' : 'Your Answer: '}</strong>
                <span className="text-red-700 italic font-medium text-sm">{submittedAnswer}</span>
                <br/>
            </>
        );
    }

    return (
        <div className={boxClasses}>
            <p className="font-bold text-lg mb-2 text-blue-700">Giải thích (Rationale):</p>
            <div className="text-gray-700">
                {submittedAnswerDisplay()}
                <strong>Đáp án đúng:</strong> {question.correctAnswer} <br />
                {question.rationale_vi}
            </div>
            <div className="text-gray-600 italic mt-1 text-sm">
                <strong>Correct Answer:</strong> {question.correctAnswer} <br />
                {question.rationale_en}
            </div>
        </div>
    );
};

export default RationaleBox;
