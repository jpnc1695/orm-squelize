/* const database = require('../models')
const Sequelize = require('sequelize') */
const {PessoasServices} = require('../services/index')
const pessoasService = new PessoasServices()

class PessoaController {

 static async pegaPessoasAtivas(req, res){
  try{
    const PessoasAtivas = await pessoasService.pegaRegistrosAtivos()
    return res.status(200).json(PessoasAtivas)
   }
   catch(error){
    return res.status(500).json(error.message)
   }
 
 }
 
 static async pegaTodasAsPessoas(req, res){
  try{
    const todasAsPessoas = await pessoasService.pegaTodosOsRegistros()
    return res.status(200).json(todasAsPessoas)
   }
   catch(error){
    return res.status(500).json(error.message)
   }
 
 }

static async pegarPessoaPorId(req, res){
  const {id} = req.params
  try {
     const umaPessoa = await database.Pessoas.findOne({
      where:{
        id:Number(id)
      }
    })
    return res.status(200).json(umaPessoa)
  }
  catch(error){
   return res.status(500).json(error.message)
  }

}

static async criaPessoa (req, res) {
  const novaPessoa = req.body
  try{
    const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
    return res.status(200).json(novaPessoaCriada)
  }
  catch(error){
   return res.status(500).json(error.message)
  }
 
}

static async atualizaPessoa (req, res){
  const atualizaInfo = req.body
  const {id} = req.params

  try{
      await database
            .Pessoas
            .update(atualizaInfo,{where:{id:Number(id)}})
      const pessoaAtualizada =  await database
           .Pessoas
           .findOne({where:{id:Number(id)}})     
              
   return res.status(200).json(pessoaAtualizada)           
  }
  catch(error){
    return res.status(500).json(error.message)
  }
 
}
 
static async deletarPessoa(req, res) {
  const {id} = req.params

  try{
      await database.Pessoas.destroy({ where:{id:Number(id)}})
      return res.status(200).json({mensagem:`id: ${id} excluido com sucesso`})      
  }
  catch(error){
    return res.status(500).json(error.message)
  }
 
}

static async restauraPessoa(req, res) {
  const {id} = req.params

  try{
      await database.Pessoas.restore({where: {id: Number(id)}}) 
      return res.status(20).json({mensagem: `id: ${id} restaurado com sucesso.`})  
  }
  catch(error){
    return res.status(500).json(error.message)
  }
 
}

static async pegaTurmasLotadas(req, res) {
  const lotacaoTurmas = 2;

  try{
    const turmasLotadas = await database.Matriculas.findAndCountAll({
      where: {
        status: 'confirmado'
      },
      attributes: ['turma_id'],
      group: ['turma_id'],
      having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurmas}`)

    })  
    return res.status(200).json(turmasLotadas.count)
  }
  catch(error){
    return res.status(500).json(error.message)
  }
 
}

static async cancelaPessoa(req, res) {
  const {estudanteId} = req.params

  try{
     pessoasService.cancelaPessoasEMatricula(Number(estudanteId))
  }
  catch(error){
    return res.status(500).json(error.message)
  } 
}


}

module.exports = PessoaController

