import React, { useState } from 'react';
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
        <div className="header-content">
          <div className="animated-tiles left-tiles">
            <div className="tile-row">
              <div className="animated-tile tile-1">1</div>
              <div className="animated-tile tile-2">2</div>
              <div className="animated-tile tile-3">3</div>
            </div>
          </div>
          <div className="game-title">
            <h1>🔢 NUMBLE 🔢</h1>
            <p>Like Wordle, but with Numbers!</p>
          </div>
          <div className="animated-tiles right-tiles">
            <div className="tile-row">
              <div className="animated-tile tile-4">4</div>
              <div className="animated-tile tile-5">5</div>
              <div className="animated-tile tile-6">6</div>
            </div>
          </div>
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
