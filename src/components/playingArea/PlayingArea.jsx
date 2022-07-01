import "./playingArea.css"

const boxes = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, 
  {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}]


export default function PlayingArea() {
  return (
    <div className="playingArea">
      {boxes.map((box) => {
        return (
          <div key={box.id} className="box">
            {box.id}
          </div>
        )
      })}
    </div>
  )
}
