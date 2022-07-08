import './playerArea.css';

export default function PlayerArea({playerInfo, activePlayer, updatePlayerInfo}) {
  const handlePieceSelection = (piece, playerInfo) => {

    playerInfo.Pieces.map(p => {
      if(p.id === piece.id) {
        piece.active = true;
        return piece;
      } else {
        piece.active = false;
        return p;
      }
    })
    if(activePlayer) {
      console.log(playerInfo, piece);
      updatePlayerInfo(
        playerInfo
      )
    }
  }

  return (
    <div className='playerArea'>

      <span className="playerName" style={{color: playerInfo.Color}}>
        {activePlayer && <span> > </span>}
        {playerInfo.Name}
      </span>

      <div className="allPieces">
        {playerInfo.Pieces.map(piece => {
          return (

            <div 
              className="piece" 
              key={piece.id} 
              style={{
                      width: piece.size, 
                      height: piece.size, 
                      backgroundColor: playerInfo.Color
                    }}
              onClick={() => handlePieceSelection(piece, playerInfo)}
            >
              {/* Div for pieces of tic tac toe */}
            </div>
            
          )
        })}
      </div>
    </div>
  )
}
