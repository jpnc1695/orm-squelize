const {Router} = require ('express')
const PessoaController = require('../controllers/PessoaController.js')


const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegarPessoaPorId)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudateId/matricula', PessoaController.criaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)
router.delete('/pessoas/:id', PessoaController.deletarPessoa)

module.exports = router

/* 
'/pessoas/:estudateId/matricula'
'/pessoas/:estudateId/matricula' */