import React from 'react';
import './App.css';
import StartForm from './chess/StartForm';
import Board from './chess/Board';
import './chess/style.css';

function App() {

  const [boardData, setBoardData] = React.useState({ boardSize: 6, steps: 10 });
  const [chessStarted, setChessStarted] = React.useState(false);

  const startChess = (values) => {
    setBoardData(values);
    setChessStarted(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/chess.png" className="logo" alt="logo" />
      </header>
      <section className="App-main">
        {chessStarted ? 
          <Board boardData={boardData} /> :
          <StartForm startChess={startChess}/>}
      </section>
    </div>
  );
}

export default App;
