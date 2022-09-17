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
  Name: 'Player 1',
  Color: '#ffa500',
  ColorName: 'piece1Color',
  Pieces: playerPieces.map(piece => {
    return {id: piece.id, size: ((piece.id * 8)+ 10)}
  })
}

export const playerTwo = {
  Id: 2,
  Name: 'Player 2',
  Color: '#4dd2ff',
  ColorName: 'piece2Color',
  Pieces: playerPieces.map(piece => {
    return {id: piece.id + 6, size: ((piece.id * 8)+ 10)}
  })
}
