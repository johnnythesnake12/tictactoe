import React, {useState} from 'react';

const TicTacToeCell = (props) => {
    const [value, setValue] = useState('');
    let test = "good";
    const fillCell = () => {
      // console.log(props);
      // Assuming 'X' is the next value to set, and that you will handle turns somewhere else
      if (value === "") {
        if (props.player1Turn) { // This will ensure the cell can only be filled once
          test = "O";
          setValue('O');
        } else {
          test = "X";
          setValue('X')
        }
        console.log(test);
        props.changePlayerTurn();
        props.setCells((cells) => {
          return cells.map((cell, i) => {
            console.log("");
            return props.index === i ? test : cell;
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