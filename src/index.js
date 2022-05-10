const Board = require('../src/board')

const board = new Board()

// Primer frame
board.setPuntuacionPrimerTiro(4)
board.setPuntuacionSegundoTiro(6)

// Segundo frame
board.setPuntuacionPrimerTiro(10)
board.setPuntuacionSegundoTiro(0)

// Tercer frame
board.setPuntuacionPrimerTiro(5)
board.setPuntuacionSegundoTiro(5)

// console.log(board.getPrimerNodo().toString())
// console.log(board.getPrimerNodo().getNodoSiguiente().toString())
// console.log(board.getPrimerNodo().getNodoSiguiente().getNodoSiguiente().toString())
console.log(board.toString())
