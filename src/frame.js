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

  getTiro1 () {
    return this.tiro1
  }

  getTiro2 () {
    return this.tiro2
  }
}

export default Frame
