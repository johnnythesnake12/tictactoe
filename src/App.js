import './App.css';
import TicTacToeCell from './TicTacToeCell.jsx';
import React, {useState, useEffect} from 'react';
function App() {
  const [cells,setCells] = useState(Array(9).fill(""));
  const [player1Turn,setPlayer1Turn] = useState(true);
  const [gameState,setGameState] = useState("");
  const changePlayerTurn = () => {
    setPlayer1Turn(!player1Turn)
  }

  useEffect(() => {
    const checkGameState = () => {
      const patterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
      ];
      for (const pattern of patterns) {
        const [a, b, c] = pattern;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
          if (cells[a] === "X") {
            setGameState("Player 2");
          } else {
            setGameState("Player 1");
          }
        }
      }
      if (!cells.includes("")) {
        setGameState("Draw");
      }
    }

    checkGameState();
  }, [cells]);
  return (
    <div className="App">
      <h1>Welcome to Johnnythesnake's tictactoe</h1>
      <header className="App-header">

        <div style={{ marginBottom: '20px', color:'black' }}>
          Player {player1Turn? 1 : 2}'s turn 
        </div>
        <div className="tic-tac-toe">
        {cells.map((value, index) => (
          <TicTacToeCell
          key={index}
          value={value}
          changePlayerTurn = {changePlayerTurn}
          player1Turn = {player1Turn}
          gameState = {gameState}
          setCells = {setCells}
          location = {index}
          cells = {cells}

           />
        ))}
        </div>

        {gameState && <div>Winner: {gameState === "Draw" ? "Draw" : gameState}  </div>}

      </header>
    </div>
  );
}

export default App;
