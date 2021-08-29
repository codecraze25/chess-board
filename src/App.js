import React from 'react';
import './App.css';
import StartForm from './chess/StartForm';
import Board from './chess/Board';
import Result from './chess/Result';
import './chess/style.css';

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function App() {
  const [boardData, setBoardData] = React.useState({ boardSize: 6, steps: 10 });
  const [positions, setPositions] = React.useState([]);
  const [chessScreen, setChessScreen] = React.useState('initial');

  const startChess = (values) => {
    setBoardData(values);
    setChessScreen('started');
  }

  const addPosition = (position) => {
    const newPositions = [...positions, position];
    setPositions(newPositions);
    if (newPositions.length === boardData.steps) {
      setTimeout(() => { setChessScreen('finished'); }, 1000);
    }
  }

  const restartChess = () => {
    setPositions([]);
    setChessScreen('initial');
  }

  console.log(positions);
  return (
    <div className="App">
      <header className="App-header">
        <img src="/chess.png" className="logo" alt="logo" />
      </header>
      <section className="App-main">
        {chessScreen === 'initial' && <StartForm startChess={startChess} />}
        {chessScreen === 'started' && <Board boardSize={boardData.boardSize} addPosition={addPosition} stop={positions.length === boardData.steps} />}
        {chessScreen === 'finished' && <Result positions={positions} restartChess={restartChess} />}
      </section>
    </div>
  );
}

export default App;