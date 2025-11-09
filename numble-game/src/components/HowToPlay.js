import React from 'react';
import './HowToPlay.css';

const HowToPlay = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>How To Play</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p className="subtitle">Guess the Numble in 7 tries.</p>
          
          <div className="rules-section">
            <ul>
              <li>Each guess must be a valid number with the selected number of digits.</li>
              <li>Numbers cannot start with 0.</li>
              <li>The color of the tiles will change to show how close your guess was to the number.</li>
            </ul>
          </div>

          <div className="examples-section">
            <h3>Examples</h3>
            
            <div className="example">
              <div className="example-row">
                <div className="cell correct">1</div>
                <div className="cell absent">2</div>
                <div className="cell absent">3</div>
                <div className="cell absent">4</div>
              </div>
              <p><strong>1</strong> is in the number and in the correct spot.</p>
            </div>

            <div className="example">
              <div className="example-row">
                <div className="cell absent">5</div>
                <div className="cell present">6</div>
                <div className="cell absent">7</div>
                <div className="cell absent">8</div>
              </div>
              <p><strong>6</strong> is in the number but in the wrong spot.</p>
            </div>

            <div className="example">
              <div className="example-row">
                <div className="cell absent">9</div>
                <div className="cell absent">0</div>
                <div className="cell absent">1</div>
                <div className="cell absent">2</div>
              </div>
              <p>None of these digits are in the number in any spot.</p>
            </div>
          </div>

          <div className="additional-rules">
            <h3>Game Rules</h3>
            <ul>
              <li>🎯 Choose your difficulty: 3, 4, 5, or 6 digits</li>
              <li>🔢 Numbers cannot start with 0</li>
              <li>✅ Green means correct digit in correct position</li>
              <li>🟡 Yellow means correct digit in wrong position</li>
              <li>⚫ Gray means digit is not in the number</li>
              <li>🎮 You have 7 attempts to guess the number</li>
              <li>🏆 Try to solve it in as few attempts as possible!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
