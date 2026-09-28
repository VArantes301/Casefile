const { Router } = require('express')
const caseController = require('../controllers/caseController')

const router = Router()

router.post('/generate', caseController.generateCase)
router.get('/', caseController.getCase)
router.post('/investigate', caseController.investigate)
router.post('/interrogate', caseController.interrogate)
router.post('/stay', caseController.stay)
router.post('/talk', caseController.talk)
router.post('/accuse', caseController.accuse)

module.exports = router;
