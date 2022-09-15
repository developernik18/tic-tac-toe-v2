import { useState } from 'react';
import './App.css';
import PlayerArea from './components/playerArea/PlayerArea';
import PlayingArea from './components/playingArea/PlayingArea';
import {playerOne, playerTwo} from './data';

function App() {
  const [turn, setTurn] = useState('playerOne'); // playerOne, playerTwo or End state
  const [playerOneInfo, setPlayerOneInfo] = useState(playerOne);
  const [playerTwoInfo, setPlayerTwoInfo] = useState(playerTwo);

  const playerOneActive = turn === "playerOne";
  const playerTwoActive = turn === "playerTwo";

  const handleItemSelection = (allPieces) => {
    if(turn === "playerOne") {
      setPlayerOneInfo(prev => {return {...prev, Pieces: allPieces}});
    } else {
      setPlayerTwoInfo(prev => {return {...prev, Pieces: allPieces}});
    }
  }

  const saveUsedPieceInfo = (prev) => {
    const allPieces = [...prev.Pieces];
    allPieces.map(p => {
      if(p.active && !p.used) {
        p.used = true;
        p.active = false;
      }
      return p;
    });
    return {...prev, Pieces: allPieces};
  }

  const handlePieceUsed = () => {
    if(turn === "playerOne") {
      setPlayerOneInfo(saveUsedPieceInfo);
    } else {
      setPlayerTwoInfo(saveUsedPieceInfo);
    }


    setTurn(prev => {
      if(prev === "playerOne") return "playerTwo";
      if(prev === "playerTwo") return "playerOne";
    })
  }

  return (
    <div className="App">
      <div className="appContainer">
        <PlayerArea 
          playerInfo={playerOneInfo} 
          activePlayer={playerOneActive}
          updateItemSelection={handleItemSelection}
        />
        <PlayingArea 
          playerInfo={playerOneActive ? playerOneInfo : playerTwoInfo} 
          handlePieceUsed={handlePieceUsed}
        />
        <PlayerArea 
          playerInfo={playerTwoInfo} 
          activePlayer={playerTwoActive}
          updateItemSelection={handleItemSelection}
        />
      </div>
    </div>
  );
}

export default App;