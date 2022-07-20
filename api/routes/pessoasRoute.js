const {Router} = require ('express')
const PessoaController = require('../controllers/PessoaController.js')
const MatriculaController = require('../controllers/MatriculaController.js')



const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/ativa', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/:id', PessoaController.pegarPessoaPorId)
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
router.get('/pessoas/:estudanteId/matricula', MatriculaController.pegaMatricula)
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculaPorTurma)

router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

router.post('/pessoas/:estudateId/matricula', MatriculaController.criaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)


router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)


router.delete('/pessoas/:id', PessoaController.deletarPessoa)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.deletarMatricula)


module.exports = router

/* 
'/pessoas/:estudateId/matricula'
'/pessoas/:estudateId/matricula' */