import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (name: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  const isButtonDisabled = name.trim() === '';

  return (
    <div className="fade-in text-center">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">Bài Thi Thử IOE 9.2</h1>
        <p className="text-lg text-gray-500">Sắp xếp câu & Trắc nghiệm Tiếng Anh</p>
      </header>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Chào mừng đến với bài thi!</h2>
        <p className="text-gray-600 mb-6">Mỗi câu trả lời đúng lần đầu được cộng 10 điểm.</p>
        <div className="space-y-4">
          <label htmlFor="player-name" className="block text-sm font-medium text-gray-700 text-left">Nhập tên của bạn để bắt đầu:</label>
          <input
            type="text"
            id="player-name"
            placeholder="Tên người chơi"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
            maxLength={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isButtonDisabled && handleStart()}
          />
          <button
            onClick={handleStart}
            disabled={isButtonDisabled}
            className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-md transition duration-300 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-xl"
          >
            Bắt Đầu Thi
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
