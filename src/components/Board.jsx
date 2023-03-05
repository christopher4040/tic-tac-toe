import { useState } from 'react';
import '../App.css';
import Square from './Square';

function Board() {
  const xImg = 'X';
  const oImg = 'O';
  const [player, setPlayer] = useState(1);
  const [gameState, setGameState] = useState([]);

  let status = checkForWinner(gameState) ? 'x' : 'Next Player:';

  const win = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };

  const renderSquare = (i) => {
    // use properties to pass callback function takeTurn to Child
    return <Square takeTurn={takeTurn} id={i} />;
  };

  // Part 1 step 1 code goes here
  // Use conditional logic to set a variable to either 'Player O' or 'Player X'

  function checkForWinner() {
    // get array of box id's
    // can't be a winner in less than 5 turns
    if (gameState.length < 5) return;
    let p0 = gameState.filter((item) => {
      if (item.player == 0) return item;
    });
    p0 = p0.map((item) => item.id);

    let px = gameState.filter((item) => {
      if (item.player == 1) return item;
    });
    px = px.map((item) => item.id);

    if (p0 != null && px != null) {
      var win0 = win.filter((item) => {
        return isSuperset(new Set(p0), new Set(item));
      });
      var winX = win.filter((item) => {
        return isSuperset(new Set(px), new Set(item));
      });
    }
    if (win0.length > 0) {
      console.log('0 is the winner');
      return oImg;
    } else if (winX.length > 0) {
      console.log('X is the winner');
      return xImg;
    }
  }

  // check if subset is in the set
  const isSuperset = (set, subset) => {
    for (let elem of subset) {
      if (!set.has(elem)) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <h1>{status}</h1>
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
}

export default Board;
