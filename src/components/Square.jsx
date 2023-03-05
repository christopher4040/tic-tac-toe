import { useState } from 'react';

function Square({takeTurn, id}) {
  const xImg = new Image().src = './assets/react.svg';
  const oImg = new Image().src = './assets/react.svg';  
  
  const mark = [oImg, xImg];
    // id is the square's number
    // filled tells you if square has been filled
    // tik tells you symbol in square (same as player)
    // You call takeTurn to tell Parent that the square has been filled
    const [filled, setFilled] = useState(false);
    const [tik, setTik] = useState(2);
  
    return (
      <button
        className="square"
        // Part 2: update the return statement below to add css classes
        onClick={() => {
          if (!filled) {
          setTik(takeTurn(id));
          setFilled(true);
          console.log(`Square: ${id} filled by player : ${tik}`);
          }
        }}
      >
        <img className="imgBtn" src={mark[tik]}></img>
      </button>
    );
}

export default Square;