import React from 'react';
import './WinModal.css';

const WinModal = ({ isOpen, onClose, secretNumber, attempts, numDigits, onPlayAgain }) => {
  if (!isOpen) return null;

  const getPerformanceMessage = () => {
    if (attempts <= numDigits) {
      return { emoji: '🏆', message: 'GENIUS! Incredible!' };
    } else if (attempts <= numDigits * 2) {
      return { emoji: '⭐', message: 'MAGNIFICENT! Well done!' };
    } else {
      return { emoji: '👍', message: 'GREAT! Nice work!' };
    }
  };

  const performance = getPerformanceMessage();

  return (
    <div className="win-modal-overlay" onClick={onClose}>
      <div className="win-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="win-modal-header">
          <div className="celebration-emoji">🎉</div>
          <h2 className="win-title">You Won!</h2>
        </div>
        
        <div className="win-modal-body">
          <div className="secret-number-display">
            <p className="secret-label">The number was:</p>
            <div className="secret-number">{secretNumber}</div>
          </div>
          
          <div className="performance-section">
            <div className="performance-emoji">{performance.emoji}</div>
            <p className="performance-message">{performance.message}</p>
          </div>
          
          <div className="attempts-info">
            <p>Solved in <strong>{attempts}</strong> attempt{attempts > 1 ? 's' : ''}!</p>
          </div>
        </div>
        
        <div className="win-modal-footer">
          <button className="play-again-modal-button" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
        
        <div className="confetti">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className={`confetti-piece confetti-${i % 6}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinModal;
