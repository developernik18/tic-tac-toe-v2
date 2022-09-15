import './playerArea.css';

export default function PlayerArea({playerInfo, activePlayer, updateItemSelection}) {
  const handlePieceSelection = (piece, playerInfo) => {
    if(piece.used || !activePlayer) return false;

    const allPieces = [...playerInfo.Pieces];
    allPieces.map(p => {
      if(p.id === piece.id) {
        p.active = !p.active;
      } else {
        p.active = false;
      }
      return p;
    });
    if(activePlayer) {
      updateItemSelection(allPieces)
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
          let pieceClass = piece.active ? 'yellow' : piece.used ? "noColor" : playerInfo.Color; 
          return (
            <div 
              className={`piece ${pieceClass} ${piece.used && 'cursor'}`}
              key={piece.id} 
              style={{
                      width: piece.size, 
                      height: piece.size, 
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
