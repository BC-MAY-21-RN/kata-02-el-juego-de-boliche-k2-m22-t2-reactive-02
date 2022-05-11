const Frame = require('../src/frame')
class Board {
  constructor () {
    this.primerNodo = new Frame(null, null)
    this.nodoActual = this.primerNodo
    let aux = this.primerNodo
    for (let index = 1; index < 10; index++) {
      const nuevoNodo = new Frame(aux, null)
      aux.setNodoSiguiente(nuevoNodo)
      aux = nuevoNodo
    }
  }

  getPrimerNodo () {
    return this.primerNodo
  }

  // TODO: falta verificar si es strike o spare
  setPuntuacionPrimerTiro (puntuacion) {
    this.nodoActual.setTiro1(puntuacion)
    if (this.nodoActual.getNodoAnterior() != null) {
      if (this.nodoActual.getNodoAnterior().getPuntuacionFinal() === 10) {
        this.nodoActual.getNodoAnterior().setBonificacion(puntuacion)
      }
    }
  }

  setPuntuacionSegundoTiro (puntuacion) {
    this.nodoActual.setTiro2(puntuacion)
    if (this.nodoActual.getNodoSiguiente() != null) {
      this.nodoActual = this.nodoActual.getNodoSiguiente()
    }
  }

  setPuntuacionTercerTiro (puntuacion) {
    if (this.nodoActual.getNodoSiguiente() == null && (this.nodoActual.getNodoAnterior().isSpare() || this.nodoActual.getNodoAnterior().isStrike())) {
      this.nodoActual.setTiro3(puntuacion)
    }
  }

  toString () {
    const topEdge = '+----+----+'.repeat(10)
    const middle = '|    +----|'.repeat(10)
    const bottomEdge = '+---------+'.repeat(10)
    let shootsString = ''
    let scoreString = ''
    let aux = this.primerNodo
    while (aux != null) {
      const isLastFrame = aux.getNodoSiguiente() == null
      shootsString += aux.getShootsString(isLastFrame)
      scoreString += aux.getScoreString()
      aux = aux.getNodoSiguiente()
    }
    return topEdge + '\n' + shootsString + '\n' + middle + '\n' + scoreString + '\n' + bottomEdge
  }
}

module.exports = Board
