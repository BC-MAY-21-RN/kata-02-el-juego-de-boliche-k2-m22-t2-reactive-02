
class Board {
  constructor () {
    this.primerNodo = null
  }

  agregarFrame (tiro1, tiro2) {
    // Si el primer nodo es null entonces no hay lista enlazada  
    if (this.primerNodo == null) {
        this.primerNodo = new Frame(null, null)
        this.primerNodo.setTiro1(tiro1)
        this.primerNodo.sumaPuntuacionFinal(tiro1)
        this.primerNodo.setTiro2(tiro2)
        this.primerNodo.sumaPuntuacionFinal(tiro2)
      }else{
        // Si el primer nodo es diferente de null entonces se agrega otro nodo.
        var aux = this.primerNodo
        //var nuevoNodo = new Frame(null,null) //nodo que se agrega a la lista

        while(aux){
            
        }
        
      }
  }

}

export default Board
