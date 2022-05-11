const Board = require('../src/board')

const board = new Board()

const generateShoot = (firstResult) => {
  let max = 10
  if (firstResult) {
    max = 10 - firstResult
  }
  return Math.floor(Math.random() * (max + 1))
}

// Generate 10 shoots
for (let index = 0; index < 10; index++) {
  const firstShoot = generateShoot()
  board.setPuntuacionPrimerTiro(firstShoot)
  const secondShoot = generateShoot(firstShoot)
  board.setPuntuacionSegundoTiro(secondShoot)
  if (index === 9) {
    const thirdShoot = generateShoot()
    board.setPuntuacionTercerTiro(thirdShoot)
  }
}

console.log(board.toString())
