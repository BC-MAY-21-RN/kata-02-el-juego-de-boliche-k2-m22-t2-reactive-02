class Frame {
  constructor (nodoAnterior, nodoSiguiente) {
    this.tiro1 = 0
    this.tiro2 = 0
    this.puntuacionFinal = 0
    this.nodoanterior = nodoAnterior
    this.nodosiguiente = nodoSiguiente
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

  setNodoSiguiente (nodo) {
    this.nodosiguiente = nodo
  }

  setNodoAnterior (nodo) {
    this.nodoanterior = nodo
  }

  getTiro1 () {
    return this.tiro1
  }

  getTiro2 () {
    return this.tiro2
  }

  getNodoAnterior () {
    return this.nodoanterior
  }

  getNodoSiguiente () {
    return this.nodosiguiente
  }

  getPuntuacionFinal () {
    return this.puntuacionFinal
  }
}

module.exports = Frame
