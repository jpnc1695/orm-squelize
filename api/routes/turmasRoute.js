const {Router} = require ('express')
const TurmaController = require('../controllers/TurmaController.js')

const router = Router()

router.get('/turmas', TurmaController.pegarTodasasTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.post('/turmas/:id/restaura', TurmaController.restaurarTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.deletarTurma)  


module.exports = router