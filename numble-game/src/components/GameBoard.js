import React, { useState, useEffect, useCallback } from 'react';
import './GameBoard.css';
import WinModal from './WinModal';

const GameBoard = ({ showToast }) => {
  const [numDigits, setNumDigits] = useState(4);
  const [secretNumber, setSecretNumber] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 7;

  // Generate random number
  const generateRandomNumber = (digits) => {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  // Initialize game
  const initializeGame = useCallback(() => {
    const secret = generateRandomNumber(numDigits);
    setSecretNumber(secret);
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setGameWon(false);
    setAttempts(0);
    console.log('Secret number:', secret); // For debugging
  }, [numDigits]);

  useEffect(() => {
    initializeGame();
  }, [numDigits, initializeGame]);

  // Validate guess
  const isValidNumber = (guess) => {
    if (guess.length !== numDigits) {
      return { valid: false, message: `Enter a ${numDigits}-digit number` };
    }
    if (guess[0] === '0') {
      return { valid: false, message: 'Number cannot start with 0' };
    }
    if (!/^\d+$/.test(guess)) {
      return { valid: false, message: 'Only digits allowed' };
    }
    return { valid: true };
  };

  // Check guess against secret
  const checkGuess = (secret, guess) => {
    const result = [];
    const secretFreq = {};
    const guessFreq = {};
    
    // Count frequencies
    for (let char of secret) {
      secretFreq[char] = (secretFreq[char] || 0) + 1;
    }
    for (let char of guess) {
      guessFreq[char] = (guessFreq[char] || 0) + 1;
    }

    // First pass: mark correct positions
    const tempSecret = secret.split('');
    const tempGuess = guess.split('');
    
    for (let i = 0; i < numDigits; i++) {
      if (guess[i] === secret[i]) {
        result[i] = 'correct';
        tempSecret[i] = null;
        tempGuess[i] = null;
      }
    }

    // Second pass: mark correct digits in wrong positions
    for (let i = 0; i < numDigits; i++) {
      if (tempGuess[i] !== null) {
        const digit = tempGuess[i];
        const secretIndex = tempSecret.indexOf(digit);
        if (secretIndex !== -1) {
          result[i] = 'present';
          tempSecret[secretIndex] = null;
        } else {
          result[i] = 'absent';
        }
      }
    }

    return result;
  };

  // Handle guess submission
  const handleGuess = () => {
    const validation = isValidNumber(currentGuess);
    if (!validation.valid) {
      showToast(validation.message, 'error');
      return;
    }

    const result = checkGuess(secretNumber, currentGuess);
    const newGuess = {
      number: currentGuess,
      result: result
    };

    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setAttempts(attempts + 1);

    // Check if won
    if (currentGuess === secretNumber) {
      setGameWon(true);
      setGameOver(true);
      showToast('🎉 Congratulations! You solved it!', 'success');
    } else if (attempts + 1 >= maxAttempts) {
      setGameOver(true);
      showToast(`Game Over! The number was ${secretNumber}`, 'error');
    } else {
      // Provide feedback
      const correctDigits = result.filter(r => r === 'correct' || r === 'present').length;
      const correctPositions = result.filter(r => r === 'correct').length;
      
      if (correctDigits === 0) {
        showToast('No correct digits', 'info');
      } else {
        let feedback = `${correctDigits} digit${correctDigits > 1 ? 's' : ''}`;
        if (correctPositions > 0) {
          feedback += `, ${correctPositions} position${correctPositions > 1 ? 's' : ''}`;
        }
        showToast(feedback, 'info');
      }
    }

    setCurrentGuess('');
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, numDigits);
    setCurrentGuess(value);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && currentGuess.length === numDigits && !gameOver) {
      handleGuess();
    }
  };

  // Get cell class based on result
  const getCellClass = (result) => {
    switch (result) {
      case 'correct': return 'cell correct';
      case 'present': return 'cell present';
      case 'absent': return 'cell absent';
      default: return 'cell';
    }
  };

  return (
    <div className="game-board">
      <div className="game-controls">
        <div className="difficulty-selector">
          <label>Difficulty: </label>
          <select 
            value={numDigits} 
            onChange={(e) => setNumDigits(parseInt(e.target.value))}
            disabled={gameOver && !gameWon && attempts > 0}
          >
            <option value={3}>Easy (3 digits)</option>
            <option value={4}>Medium (4 digits)</option>
            <option value={5}>Hard (5 digits)</option>
            <option value={6}>Expert (6 digits)</option>
          </select>
        </div>
        
        <div className="attempts-counter">
          Attempts: {attempts}/{maxAttempts}
        </div>
      </div>

      <div className="game-grid">
        {/* Previous guesses */}
        {guesses.map((guess, rowIndex) => (
          <div key={rowIndex} className="guess-row">
            {guess.number.split('').map((digit, colIndex) => (
              <div key={colIndex} className={getCellClass(guess.result[colIndex])}>
                {digit}
              </div>
            ))}
          </div>
        ))}

        {/* Current guess row */}
        {!gameOver && (
          <div className="guess-row current">
            {Array.from({ length: numDigits }, (_, index) => (
              <div key={index} className="cell current">
                {currentGuess[index] || ''}
              </div>
            ))}
          </div>
        )}

        {/* Empty rows */}
        {Array.from({ length: maxAttempts - guesses.length - (gameOver ? 0 : 1) }, (_, index) => (
          <div key={index} className="guess-row">
            {Array.from({ length: numDigits }, (_, colIndex) => (
              <div key={colIndex} className="cell empty"></div>
            ))}
          </div>
        ))}
      </div>

      {!gameOver && (
        <div className="input-section">
          <input
            type="text"
            value={currentGuess}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder={`Enter ${numDigits}-digit number`}
            maxLength={numDigits}
            className="guess-input"
            autoFocus
          />
          <button 
            onClick={handleGuess}
            disabled={currentGuess.length !== numDigits}
            className="submit-button"
          >
            Guess
          </button>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="game-over">
          <h2>😞 Game Over</h2>
          <p>The number was: <strong>{secretNumber}</strong></p>
          <button onClick={initializeGame} className="play-again-button">
            Play Again
          </button>
        </div>
      )}

      <WinModal
        isOpen={gameWon}
        onClose={() => setGameWon(false)}
        secretNumber={secretNumber}
        attempts={attempts}
        numDigits={numDigits}
        onPlayAgain={initializeGame}
      />
    </div>
  );
};

export default GameBoard;
