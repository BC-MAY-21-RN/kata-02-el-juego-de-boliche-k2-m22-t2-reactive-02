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
  if (firstShoot !== 10) {
    const secondShoot = generateShoot(firstShoot)
    board.setPuntuacionSegundoTiro(secondShoot)
    if ((firstShoot + secondShoot === 10) && index === 9) {
      const thirdShoot = generateShoot()
      board.setPuntuacionTercerTiro(thirdShoot)
    }
  } else {
    if (index === 9) {
      const secondShoot = generateShoot(firstShoot)
      board.setPuntuacionSegundoTiro(secondShoot)
      if (secondShoot === 10 && index === 9) {
        const thirdShoot = generateShoot()
        board.setPuntuacionTercerTiro(thirdShoot)
      }
    } else {
      board.setPuntuacionSegundoTiro(0)
    }
  }
}

console.log(board.toString())
