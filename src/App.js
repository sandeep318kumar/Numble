import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import HowToPlay from './components/HowToPlay';
import Toast from './components/Toast';

function App() {
  const [showRules, setShowRules] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', show: false });

  const showToast = (message, type = 'info') => {
    setToast({ message, type, show: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="game-title">
          <h1>🔢 NUMBLE 🔢</h1>
          <p>Like Wordle, but with Numbers!</p>
        </div>
        <button 
          className="rules-button"
          onClick={() => setShowRules(true)}
        >
          How to Play
        </button>
      </header>

      <main className="App-main">
        <GameBoard showToast={showToast} />
      </main>

      {showRules && (
        <HowToPlay onClose={() => setShowRules(false)} />
      )}

      <Toast 
        message={toast.message}
        type={toast.type}
        show={toast.show}
      />
    </div>
  );
}

export default App;
