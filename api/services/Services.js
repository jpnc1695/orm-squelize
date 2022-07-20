const database = require('../models')

class Services {
    constructor(nomeDoModelo){
      this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(where = {}){
      return database[this.nomeDoModelo].findAll({where: {...where}})
    }

    async PegaUmRegistro(id) {

    }

    async criaRegistro(dados) {
      
    }

    async atualizaRegistro(dadaAtualizado, id, transacao = {}) {
      return database[this.nomeDoModelo]
              .update(dadaAtualizado, {where: { id:id}}, transacao)
    }

    async atualizaRegistros(dadaAtualizado, where, transacao = {}) {
      return database[this.nomeDoModelo]
              .update(dadaAtualizado, {where: { ...where}}, transacao)
    }
    
    async deletaRegistro(id){

    }
}



module.exports = Services