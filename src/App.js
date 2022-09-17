import { useState } from 'react';
import './App.css';
import PlayerArea from './components/playerArea/PlayerArea';
import PlayingArea from './components/playingArea/PlayingArea';
import {playerOne, playerTwo} from './data';

const p1 = "playerOne";
const p2 = "playerTwo"

function App() {
  const [turn, setTurn] = useState(p1); // playerOne, playerTwo or End state
  const [playerOneInfo, setPlayerOneInfo] = useState(playerOne);
  const [playerTwoInfo, setPlayerTwoInfo] = useState(playerTwo);

  const playerOneActive = turn === p1;
  const playerTwoActive = turn === p2;


  const handleItemSelection = (allPieces) => {
    if(turn === p1) {
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
    if(turn === p1) {
      setPlayerOneInfo(saveUsedPieceInfo);
    } else {
      setPlayerTwoInfo(saveUsedPieceInfo);
    }


    setTurn(prev => {
      if(prev === p1) return p2;
      if(prev === p2) return p1;
    })
  }

  const getWinnerInfo = (playerId) => {
    if(playerId === 1) {
      return playerOneInfo;
    } else {
      return playerTwoInfo;
    }
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
          getWinnerInfo={getWinnerInfo}
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