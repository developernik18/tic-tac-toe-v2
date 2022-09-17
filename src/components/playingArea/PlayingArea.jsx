import { useEffect } from "react";
import { useState } from "react";
import Modal from "../shared/Modal";
import "./playingArea.css";

const winPattern = [
  '012', '048', '036', '147', '246', '258', '345', '678'
];

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

export default function PlayingArea({ playerInfo, handlePieceUsed, getWinnerInfo}) {
  const activePiece = playerInfo.Pieces.filter((p) => p.active)[0];
  const [boxes, setBoxes] = useState(allBoxes);
  const [hiddenBoxes, setHiddenBoxes] = useState(allBoxes);
  const [winner, setWinner] = useState(null);

  // create content based on playerInfo
  const  createContent = (playerInfo) => {
    return (
        <div 
          className={`piece ${playerInfo.ColorName}`} 
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
  const handleMouseClick = (boxId, pieceCanBeUsed) => {
    if(!activePiece) return false;

    setBoxes(prev => {
      return prev.map(box => {
        if(box.id === boxId && box.hoverPiece) {
          box.placedPiece = box.hoverPiece;
          box.pieceSize = activePiece.size;
          box.playerId = playerInfo.Id;
        }
        return box;
      })
    });

    if(pieceCanBeUsed) {
      handlePieceUsed();
      setHiddenBoxes(boxes);
    }

  }

  useEffect(() => {
    const checkForVictory = (gameBoxes) => {
      winPattern.forEach(p => {
        let firstBox = gameBoxes[p[0]];
        let secondBox = gameBoxes[p[1]];
        let thirdBox = gameBoxes[p[2]];
  
        if(firstBox.playerId && secondBox.playerId && thirdBox.playerId){
          if(firstBox.playerId === secondBox.playerId && firstBox.playerId === thirdBox.playerId) {
            setWinner(getWinnerInfo(firstBox.playerId));
          }
        }
      });
    }

    checkForVictory(hiddenBoxes);
  }, [hiddenBoxes, getWinnerInfo]);

  return (
    <div className="playingArea">
      {boxes.map((box) => {
        return (
          <div
            key={box.id}
            className="box"
            onMouseEnter={activePiece && (() => handleMouseEnter(box.id, playerInfo))}
            onClick={() => handleMouseClick(box.id, box.hoverPiece)}
          >
            {box.hoverPiece}
            {!box.hoverPiece && box.placedPiece}
          </div>
        );
      })}
      {winner && (<Modal winner={winner}/>)}
    </div>
  );
}
