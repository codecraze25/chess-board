import React from 'react';

function Result({ positions, restartChess }) {

  const handleClick = () => {
    restartChess();
  };

  let items = [];
  positions.forEach((p, i) => items.push(`{${p.x}, ${p.y}}`));

  let itemsStr = `[${items.join(", ")}]`;
  console.log(items);
  return (
    <div className="result">
      <h2>Thank you! Your steps:</h2>
      <div className="steps-result">
        {itemsStr}
      </div>

      <button onClick={handleClick}>START OVER</button>
    </div>
  );
}

export default Result;
