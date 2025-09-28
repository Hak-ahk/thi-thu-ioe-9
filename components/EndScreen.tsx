import React from 'react';

interface EndScreenProps {
  playerName: string;
  score: number;
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ playerName, score, onRestart }) => {
  return (
    <div className="text-center fade-in">
      <h2 className="text-3xl font-bold mb-4 text-green-600">🎉 Hoàn Thành Bài Thi! 🎉</h2>
      <p className="text-xl text-gray-700 mb-6">
        Chúc mừng, <span className="font-extrabold text-blue-600">{playerName}</span>!
      </p>
      <p className="text-2xl font-semibold mb-8">Điểm số cuối cùng của bạn là:</p>
      <p className="text-6xl font-black text-red-700 mb-10">{score}</p>
      <button
        onClick={onRestart}
        className="py-3 px-6 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition duration-300 hover:bg-blue-600 text-lg"
      >
        Làm lại bài thi
      </button>
    </div>
  );
};

export default EndScreen;
