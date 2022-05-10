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

  setPuntuacionPrimerTiro (puntuacion) {
    this.nodoActual.setTiro1(puntuacion)
  }

  setPuntuacionSegundoTiro (puntuacion) {
    this.nodoActual.setTiro2(puntuacion)
    if (this.nodoActual.getNodoSiguiente() != null) {
      this.nodoActual = this.nodoActual.getNodoSiguiente()
    }
  }

  agregarFrame (tiro1, tiro2) {
    if (this.primerNodo == null) { // Si el primer nodo es null entonces no hay lista enlazada
      this.primerNodo = new Frame(null, null)
      this.primerNodo.setTiro1(tiro1)
      this.primerNodo.sumaPuntuacionFinal(tiro1)
      this.primerNodo.setTiro2(tiro2)
      this.primerNodo.sumaPuntuacionFinal(tiro2)
    } else {
      // Si el primer nodo es diferente de null entonces se agrega otro nodo
      let aux = this.primerNodo
      // var nuevoNodo = new Frame(null,null) //nodo que se agrega a la lista
      while (aux.getNodoSiguiente() != null) {
        aux = aux.getNodoSiguiente()
      }
      // se agrega un nodo al atributo nodosiguiente con un nuevo nodo
      aux.setNodoSiguiente(new Frame(aux, null))
      aux = aux.getNodoSiguiente()
      // agrega los tiros al nodo y verifica la puntuacion anterior
      if ((aux.getNodoAnterior().getTiro1() + aux.getNodoAnterior().getTiro2()) === 10) {
        aux.getNodoAnterior().sumaPuntuacionFinal(tiro1)
      }
      aux.sumaPuntuacionFinal(aux.getNodoAnterior().getPuntuacionFinal())
      aux.setTiro1(tiro1)
      aux.sumaPuntuacionFinal(tiro1)
      aux.setTiro2(tiro2)
      aux.sumaPuntuacionFinal(tiro2)
    }
  }
}

module.exports = Board
