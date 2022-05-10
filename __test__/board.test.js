const Board = require('../src/board')

test('A new board should generate 10 frames', () => {
  const board = new Board()
  let count = 0
  let aux = board.getPrimerNodo()
  while (aux != null) {
    count++
    aux = aux.getNodoSiguiente()
  }
  expect(count).toBe(10)
})
