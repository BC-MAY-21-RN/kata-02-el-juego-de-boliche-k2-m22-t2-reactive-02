const Board = require('../src/board')
const Frame = require('../src/frame')

describe('Board class test', () => {
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
  test('getPrimerNodo function', () => {
    const board = new Board()
    expect(board.getPrimerNodo()).toBeInstanceOf(Frame)
  })
  test('setPuntuacionPrimerTiro function', () => {
    const board = new Board()
    board.setPuntuacionPrimerTiro(5)
    const puntuacion = board.getPrimerNodo().getPuntuacionFinal()
    expect(puntuacion).toBe(5)
  })
  test('setPuntuacionSegundoTiro function', () => {
    const board = new Board()
    board.setPuntuacionPrimerTiro(0)
    board.setPuntuacionSegundoTiro(10)
    const puntuacion = board.getPrimerNodo().getPuntuacionFinal()
    expect(puntuacion).toBe(10)
  })
  test('setPuntuacionTercerTiro function', () => {
    const board = new Board()
    const board2 = new Board()
    for (let i = 0; i < 10; i++) {
      board.setPuntuacionPrimerTiro(5)
      board.setPuntuacionSegundoTiro(5)
    }
    board.setPuntuacionTercerTiro(3)
    board2.setPuntuacionTercerTiro(3)

    expect(board.nodoActual.getTiro3()).toBe(3)
    expect(board2.nodoActual.getTiro3()).toBe(0)
  })
  test('toString function', () => {
    const board = new Board()
    expect(board.toString()).toBeDefined()
  })
  test('The final score cannot be higer than 300',
    () => {
      const board = new Board()
      for (let i = 0; i < 10; i++) {
        board.setPuntuacionPrimerTiro(10)
        if (i === 9) {
          board.setPuntuacionSegundoTiro(10)
        } else {
          board.setPuntuacionSegundoTiro(0)
        }
      }
      board.setPuntuacionTercerTiro(10)
      const puntuacionFinal = board.getPuntuacionFinal()
      console.log(board.toString())
      expect(puntuacionFinal).toBeLessThanOrEqual(300) // maxima puntuacion 300
    })
  test('Repository test case: The final score must be 133',
    () => {
      const board = new Board()
      board.setPuntuacionPrimerTiro(1)
      board.setPuntuacionSegundoTiro(4)
      board.setPuntuacionPrimerTiro(4)
      board.setPuntuacionSegundoTiro(5)
      board.setPuntuacionPrimerTiro(6)
      board.setPuntuacionSegundoTiro(4)
      board.setPuntuacionPrimerTiro(5)
      board.setPuntuacionSegundoTiro(5)
      board.setPuntuacionPrimerTiro(10)
      board.setPuntuacionSegundoTiro(0)
      board.setPuntuacionPrimerTiro(0)
      board.setPuntuacionSegundoTiro(1)
      board.setPuntuacionPrimerTiro(7)
      board.setPuntuacionSegundoTiro(3)
      board.setPuntuacionPrimerTiro(6)
      board.setPuntuacionSegundoTiro(4)
      board.setPuntuacionPrimerTiro(10)
      board.setPuntuacionSegundoTiro(0)
      board.setPuntuacionPrimerTiro(2)
      board.setPuntuacionSegundoTiro(8)
      board.setPuntuacionTercerTiro(6)
      const puntuacionFinal = board.getPuntuacionFinal()
      expect(puntuacionFinal).toBe(133)
    })
})
