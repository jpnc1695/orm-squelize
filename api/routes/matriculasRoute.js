const {Router} = require ('express')
const MatriculaController = require('../controllers/MatriculaController.js')

const router = Router()

router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
router.get('/pessoas/:estudanteId/matricula', MatriculaController.pegaMatricula)
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculaPorTurma)

router.post('/pessoas/:estudateId/matricula', MatriculaController.criaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)

router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.deletarMatricula)



module.exports = router