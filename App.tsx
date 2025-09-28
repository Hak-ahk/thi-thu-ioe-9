import React, { useState, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import EndScreen from './components/EndScreen';

type GameState = 'start' | 'quiz' | 'end';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);

  const handleStartQuiz = useCallback((name: string) => {
    setPlayerName(name);
    setScore(0);
    setGameState('quiz');
  }, []);

  const handleEndQuiz = useCallback((finalScore: number) => {
    setScore(finalScore);
    setGameState('end');
  }, []);
  
  const handleRestartQuiz = useCallback(() => {
    setPlayerName('');
    setScore(0);
    setGameState('start');
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen onStart={handleStartQuiz} />;
      case 'quiz':
        return <QuizScreen playerName={playerName} onEnd={handleEndQuiz} />;
      case 'end':
        return <EndScreen playerName={playerName} score={score} onRestart={handleRestartQuiz} />;
      default:
        return <StartScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="p-4 sm:p-8 flex justify-center items-start min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100 min-h-[80vh]">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
