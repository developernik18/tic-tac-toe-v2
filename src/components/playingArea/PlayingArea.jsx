import { useState } from "react";
import "./playingArea.css";

const allBoxes = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

export default function PlayingArea({ playerInfo, handlePieceUsed }) {
  const activePiece = playerInfo.Pieces.filter((p) => p.active)[0];
  const [boxes, setBoxes] = useState(allBoxes);

  // create content based on playerInfo
  const  createContent = (playerInfo) => {
    return (
        <div 
          className={`piece ${playerInfo.Color}`} 
          style={{
              width: activePiece.size, 
              height: activePiece.size, 
            }}
        >
        </div>
    );
  }

  // function to handle mouse enter action.
  const handleMouseEnter = (boxId, playerInfo) => {
    setBoxes(prev => {
      return prev.map(box => {
        if(box.placedPiece) {
          if(box.playerId !== playerInfo.Id) {
            if(box.pieceSize < activePiece.size && boxId === box.id) {
              box.hoverPiece = createContent(playerInfo);
            } else {
              box.hoverPiece = false;
            }
          }
        } else {
          if(boxId === box.id) {
            box.hoverPiece = createContent(playerInfo);
          } else {
            delete box.hoverPiece;
          }
        }



        return box;
      })
    })
  };

  // function to save piece position.
  const handleMouseClick = (boxId) => {
    if(!activePiece) return false;

    setBoxes(prev => {
      return prev.map(box => {
        if(box.id === boxId) {
          box.placedPiece = box.hoverPiece;
          box.pieceSize = activePiece.size;
          box.playerId = playerInfo.Id;
        }
        return box;
      })
    });

    handlePieceUsed();
  }

  return (
    <div className="playingArea">
      {boxes.map((box) => {
        return (
          <div
            key={box.id}
            className="box"
            onMouseEnter={activePiece && (() => handleMouseEnter(box.id, playerInfo))}
            onClick={() => handleMouseClick(box.id)}
          >
            {box.hoverPiece}
            {!box.hoverPiece && box.placedPiece}
          </div>
        );
      })}
    </div>
  );
}
