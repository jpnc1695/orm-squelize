const database = require('../models')

class Services {
    constructor(nomeDoModelo){
      this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(){
      return database[this.nomeDoModelo].findAll()
    }

    async PegaUmRegistro(id) {

    }

    async criaRegistro(dados) {
      
    }

    async atualizaRegistro(DadaAtualizado, id) {
      
    }
    
    async deletaRegistro(id){

    }
}



module.exports = Services