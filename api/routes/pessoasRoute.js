const {Router} = require ('express')
const PessoaController = require('../controllers/PessoaController.js')


const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/ativa', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/:id', PessoaController.pegarPessoaPorId)
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)

router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)


router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.deletarPessoa)

module.exports = router

/* 
'/pessoas/:estudateId/matricula'
'/pessoas/:estudateId/matricula' */