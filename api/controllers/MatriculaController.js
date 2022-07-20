const {MatriculasServices} = require('../services/index')
const matriculaServices = new MatriculasServices()

class MatriculaController {

  static async criaMatricula (req, res) {
    const {estudanteId} = req.params
    const novaMatricula = {...req.body, estudante_id:Number(estudanteId)}
    try{
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    }
    catch(error){
     return res.status(500).json(error.message)
    }
  }
  
  static async atualizaMatricula(req, res){
    const {estudanteId, matriculaId} = req.params
    const novasInfos = req.body
    try{
      await database
            .Matriculas
            .update(novasInfos,{
              where:{
                id:Number(matriculaId),
                estudante_id:Number(estudanteId)
              }})
      const matriculaAtualizada =  await database
           .Matriculas
           .findOne({where:{id:Number(matriculaId)}})     
              
   return res.status(200).json(matriculaAtualizada)           
  }
      catch(error){
        return res.status(500).json(error.message)
      }
  
  }
  
  static async deletarMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params
  
    try{
        await database.Matriculas.destroy({ 
          where:{id:Number(matriculaId)}})
        return res.status(200).json({mensagem:`id: ${matriculaId} excluido com sucesso`})      
    }
    catch(error){
      return res.status(500).json(error.message)
    }
   
  }
  
  static async restauraMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params
  
    try{
        await database.Matriculas.restore({
          where: {
            id:Number(matriculaId),
            estudante_id:Number(estudanteId)
        }})
        return res.status(200).json({mensagem:`id: ${matriculaId} restaurado com sucesso`})      
    }
    catch(error){
      return res.status(500).json(error.message)
    }
   
  }
  
  static async pegaMatricula(req, res) {
    const {estudanteId} = req.params
  
    try{
        const pessoa = await database.Pessoas.findOne({where: {id:Number(estudanteId)}})
        const matriculas = await pessoa.getulasMatriculadas()
        /* const matriculas = await database.Matriculas.findAll({ where:{estudante_id:Number (estudanteId)}}) */
        return res.status(200).json(matriculas)      
    }
    catch(error){
      return res.status(500).json(error.message)
    }
   
  }
  
  static async pegaMatriculaPorTurma(req, res) {
    const {turmaId} = req.params
  
    try{
      const todasAsMatriculas = await database.Matriculas.findAndCountAll({
        where: {
          turma_id :Number(turmaId),
          status:'confirmado'
        },
        limit: 10,
        order: [['estudante_id', 'DESC']],
      })
     return res.status(200).json(todasAsMatriculas)
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
  
  static async pegaUmaMatricula(req, res){
    const {estudanteId, matriculaId} = req.params
    try {
       const umaMatricula = await database.Matriculas.findOne({
        where:{
          id:Number(matriculaId),
          estudante_id:Number(estudanteId)
        }
      })
      return res.status(200).json(umaMatricula)
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

module.exports = MatriculaController
