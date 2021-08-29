import React from 'react';
import { useState, useEffect } from "react";
let actionPerformed = false;

function Board({ boardData }) {
  const { boardSize, steps } = boardData;
  const center = { x: Math.floor(boardSize / 2) - 1, y: Math.floor(boardSize / 2) - 1 };
  const [position, setPosition] = React.useState(center);

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [position]);

  const movePosition = (key, point) => {
    const newPosition = {};
    switch (key) {
      case "ArrowLeft":
        newPosition = {x: point.x, y: Math.max(point.y - 1, 0)};
        break;
      case "ArrowUp":
        newPosition = {x: Math.max(point.x - 1, 0), y: point.y};
        break;
      case "ArrowRight":
        newPosition = {x: point.x, y: Math.min(point.y + 1, boardSize - 1)};
        break;
      case "ArrowDown":
        newPosition = {x: Math.min(point.x + 1, boardSize - 1), y: point.y};
        break;
    }

    setPosition(newPosition);
    return newPosition;
  }

  const downHandler = ({ key }) => {
    if (!actionPerformed) {
      movePosition(key, position);
      actionPerformed = true;
    }
  }
  const upHandler = ({ key }) => {
    actionPerformed = false;
  };

  const renderBoard = () => {
    const classNames = (i, j) => {
      if (i === position.x && j === position.y) return 'active';
      if (j % 2 === 0) {
        return (i % 2 === 0) ? "white" : "black";
      } else {
        return (i % 2 === 0) ? "black" : "white";
      }
    }

    const rows = [];
    const cellSize = `${100 / boardSize}%`;

    for (let i = 0; i < boardSize; i++) {
      const items = [];

      for (let j = 0; j < boardSize; j++) {
        items.push(<div style={{width: cellSize, height: cellSize}} key={j} className={classNames(i, j)}></div>);
      }
      rows.push(<div className="row" key={i}>{items}</div>);
    }
  
    return (
      <div className="board">{rows}</div>
    );
  }

  return (
    <div className="board-container">
      {renderBoard()}
    </div>
  );
}

export default Board;
