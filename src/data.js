const playerPieces = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6}
]

export const playerOne = {
  Id: 1,
  Name: 'Player red',
  Color: 'red',
  Pieces: playerPieces.map(piece => {
    return {id: piece.id, size: ((piece.id * 8)+ 10)}
  })
}

export const playerTwo = {
  Id: 2,
  Name: 'Player blue',
  Color: 'blue',
  Pieces: playerPieces.map(piece => {
    return {id: piece.id + 6, size: ((piece.id * 8)+ 10)}
  })
}
