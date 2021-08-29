import React from 'react';
import './App.css';
import StartForm from './chess/StartForm';
import Board from './chess/Board';
import './chess/style.css';

function App() {
  const [boardData, setBoardData] = React.useState({ boardSize: 6, steps: 10 });
  const [positions, setPositions] = React.useState([]);
  const [chessScreen, setChessScreen] = React.useState('initial');

  const startChess = (values) => {
    setBoardData(values);
    setChessScreen('started');
  }

  const restartChess = () => {
    setPositions([]);
    setChessScreen('initial');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/chess.png" className="logo" alt="logo" />
      </header>
      <section className="App-main">
        {chessScreen === 'initial' && <StartForm startChess={startChess} />}
        {chessScreen === 'started' && <Board boardData={boardData} addPosition={addPosition} />}
        {chessScreen === 'finished' && <Result positions={positions} restartChess={restartChess} />}
      </section>
    </div>
  );
}

export default App;