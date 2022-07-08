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

  const handlePlayerInfoUpdate = (newPlayerInfo) => {
    if(newPlayerInfo.Id === 1) {
      setPlayerOneInfo(newPlayerInfo);
    } else {
      setPlayerTwoInfo(newPlayerInfo);
    }

  }

  return (
    <div className="App">
      <div className="appContainer">
        <PlayerArea 
          playerInfo={playerOneInfo} 
          activePlayer={playerOneActive}
          updatePlayerInfo={handlePlayerInfoUpdate}
        />
        <PlayingArea />
        <PlayerArea 
          playerInfo={playerTwoInfo} 
          activePlayer={playerTwoActive}
          updatePlayerInfo={handlePlayerInfoUpdate}
        />
      </div>
    </div>
  );
}

export default App;