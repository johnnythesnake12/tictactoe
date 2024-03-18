import React, {useState} from 'react';

const TicTacToeCell = (props) => {
    const [value, setValue] = useState('');
    let test = "good";
    const fillCell = () => {
      // console.log(props);
      // Assuming 'X' is the next value to set, and that you will handle turns somewhere else
      if (value === "" && !props.gameState) {
        if (props.player1Turn) { // This will ensure the cell can only be filled once
          test = "O";
          setValue('O');
        } else {
          test = "X";
          setValue('X')
        }
        console.log(props.cells);
        console.log(props.gameState);
        props.changePlayerTurn();
        props.setCells((cells) => {
          return cells.map((cell, i) => {
            return props.location === i ? test : cell;
          } 
          )
        })
      }

        
        // If you have a function passed from the parent component to handle the click, call it here
        // e.g., props.onCellClick();

    };
  
    return (
      <div className="cell" onClick={fillCell} style={{ cursor: 'pointer' }}>
        {value}
      </div>
    );
};
  
export default TicTacToeCell;