# 🔢 Numble

A number-based guessing game inspired by Wordle! Guess the secret number in 7 tries.

## How To Play

Guess the **Numble** in 7 tries.

- Each guess must be a valid number with the selected number of digits
- Numbers cannot start with 0
- The color of the tiles will change to show how close your guess was to the number

### Examples

**1234** - If the secret number contains these digits:
- 🟩 **Green**: Digit is in the number and in the correct spot
- 🟨 **Yellow**: Digit is in the number but in the wrong spot  
- ⬜ **Gray**: Digit is not in the number in any spot

## Game Features

- 🎯 **Multiple Difficulties**: Choose from 3, 4, 5, or 6 digits
- 🎮 **7 Attempts**: More chances than Wordle's 6 tries
- 📱 **Responsive Design**: Play on desktop or mobile
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 🔔 **Toast Notifications**: Real-time feedback on your guesses
- 📖 **How to Play Guide**: Interactive tutorial with examples

## Game Rules

- 🔢 Numbers cannot start with 0
- ✅ Green means correct digit in correct position
- 🟡 Yellow means correct digit in wrong position
- ⚫ Gray means digit is not in the number
- 🎮 You have 7 attempts to guess the number
- 🏆 Try to solve it in as few attempts as possible!

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sandeep318kumar/Numble.git
cd Numble
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Technology Stack

- **React** - Frontend framework
- **CSS3** - Styling with modern features (backdrop-filter, gradients)
- **JavaScript ES6+** - Game logic and interactions
- **Create React App** - Project setup and build tools

## Game Logic

The game implements the same logic as the original C++ version:

1. **Number Generation**: Random numbers are generated based on difficulty
2. **Validation**: Ensures numbers don't start with 0 and contain only digits
3. **Guess Checking**: Compares guess against secret number for correct digits and positions
4. **Feedback System**: Provides visual feedback through colored tiles
5. **Win/Loss Conditions**: Tracks attempts and determines game outcome

## Performance Ratings

Just like in the original game:
- 🏆 **GENIUS!** - Solved in ≤ number of digits attempts
- ⭐ **MAGNIFICENT!** - Solved in ≤ 2× number of digits attempts  
- 👍 **GREAT!** - Solved within the attempt limit

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the original Wordle game by Josh Wardle
- Based on the C++ Numble implementation
- Built with React for a modern web experience

---

**Enjoy playing Numble! 🎮**

*Come back daily for a new challenge!*
