class Frame {
  constructor (nodoAnterior, nodoSiguiente) {
    this.tiro1 = 0
    this.tiro2 = 0
    this.tiro3 = 0
    // this.bonificacion = 0
    this.puntuacionFinal = 0
    this.nodoanterior = nodoAnterior
    this.nodoSiguiente = nodoSiguiente
  }

  sumaPuntuacionFinal (tiro) {
    this.puntuacionFinal = this.puntuacionFinal + tiro
  }

  setTiro1 (tiro1) {
    this.tiro1 = tiro1
  }

  setTiro2 (tiro2) {
    this.tiro2 = tiro2
  }

  setTiro3 (tiro3) {
    this.tiro3 = tiro3
  }

  setNodoSiguiente (nodo) {
    this.nodoSiguiente = nodo
  }

  setNodoAnterior (nodo) {
    this.nodoanterior = nodo
  }

  // setBonificacion (bonificacon) {
  //   this.bonificacion = bonificacon
  // }

  getTiro1 () {
    return this.tiro1
  }

  getTiro2 () {
    return this.tiro2
  }

  getTiro3 () {
    return this.tiro3
  }

  /**
   * Returns the previous node
   * @returns {Frame} previous node
   */
  getNodoAnterior () {
    return this.nodoanterior
  }

  getNodoSiguiente () {
    return this.nodoSiguiente
  }

  getPuntuacionFinal () {
    let puntuacionAnterior = 0
    if (this.nodoanterior != null) {
      puntuacionAnterior = this.nodoanterior.getPuntuacionFinal()
    }
    let bonificacion = 0
    if (this.nodoSiguiente != null) {
      if (this.isStrike()) {
        if (this.nodoSiguiente.isStrike()) {
          // Si el nodo siguiente es strike entonces se sumara el tiro 1
          bonificacion += this.nodoSiguiente.getTiro1()
          if (this.nodoSiguiente.getNodoSiguiente() != null) {
            // Si el nodo siguiente del nodo siguiente no es nulo entonces se sumara el tiro 1
            bonificacion += this.nodoSiguiente.getNodoSiguiente().getTiro1()
          } else {
            bonificacion += 10
          }
        } else {
          bonificacion = this.nodoSiguiente.getTiro1() + this.nodoSiguiente.getTiro2()
        }

        // bonificacion = this.nodoSiguiente.getTiro1() + this.nodoSiguiente.getTiro2()
      } else if (this.isSpare()) {
        bonificacion = this.nodoSiguiente.getTiro1()
      }
    } else if (this.isStrike()) {
      bonificacion += this.getTiro2()
    }
    let sumTiro2 = this.tiro2
    if (this.isStrike()) {
      sumTiro2 = 0
    }
    return this.tiro1 + sumTiro2 + this.tiro3 + bonificacion + puntuacionAnterior
  }

  // getBonificacion () {
  //   return this.bonificacion
  // }

  /**
   * Returns true if the current frame is a strike
   * @returns {boolean} true if score in the first shoot is 10
   */
  isStrike () {
    return this.tiro1 === 10
  }

  /**
   * Returns true if the current frame is a spare
   * @returns {boolean} true if score in the first shoot in addition with second shoot is 10
   */
  isSpare () {
    return (this.tiro1 + this.tiro2) === 10
  }

  getShootsString (isLastFrame = false) {
    let firstShootString = this.tiro1.toString().padStart(2, ' ')
    let secondShootString = this.tiro2.toString().padStart(2, ' ')
    if (this.isStrike()) {
      firstShootString = '  '
      secondShootString = ' X'
    } else if (this.isSpare()) {
      secondShootString = ' /'
    }
    let str = `| ${firstShootString} | ${secondShootString} |`
    if (isLastFrame && (this.isSpare() || this.isStrike())) {
      str = `${str} ${this.tiro3.toString().padStart(2, ' ')} |`
    }
    return str
  }

  getScoreString () {
    return `| ${this.getPuntuacionFinal().toString().padStart(7, ' ')} |`
  }
}

module.exports = Frame
