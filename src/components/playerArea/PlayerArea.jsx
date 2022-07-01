import './playerArea.css';

export default function PlayerArea({playerInfo}) {
  return (
    <div className='playerArea'>
      <span className="playerName">
        {playerInfo.Name}
      </span>
      <div className="allPieces">
        {playerInfo.Pieces.map(piece => {
          return (
            <div className="piece" key={piece.id} 
              style={{width: piece.size, height: piece.size, backgroundColor: playerInfo.Color}}>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}
