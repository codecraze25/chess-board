import React from 'react';

function Result({ positions, restartChess }) {

  const handleClick = () => {
    restartChess();
  };

  return (
    <div className="result">
      <h2>Thank you! Your steps:</h2>
      <div className="steps-result">
        {JSON.stringify(positions, null, 2)}
      </div>

      <button onClick={handleClick}>START OVER</button>
    </div>
  );
}

export default Result;
