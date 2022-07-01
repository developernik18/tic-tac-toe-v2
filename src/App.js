import { useState } from 'react';
import './App.css';
import PlayerArea from './components/playerArea/PlayerArea';
import PlayingArea from './components/playingArea/PlayingArea';

const playerPieces = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6}
]

const playerOne = {
  Name: 'Player 1',
  Color: 'red',
  Pieces: playerPieces.map(piece => {
    return {id: piece.id, size: ((piece.id * 5)+ 10) +'px'}
  })
}

const playerTwo = {
  Name: 'Player 1',
  Color: 'blue',
  Pieces: playerPieces.map(piece => {
    return {id: piece.id, size: ((piece.id * 8)+ 10)+'px'}
  })
}


function App() {
  const [turn, setTurn] = useState('playerOne'); // playerOne, playerTwo or End state


  return (
    <div className="App">
      <div className="appContainer">
        <PlayerArea playerInfo={playerOne}/>
        <PlayingArea />
        <PlayerArea playerInfo={playerTwo}/>
      </div>
    </div>
  );
}

export default App;
