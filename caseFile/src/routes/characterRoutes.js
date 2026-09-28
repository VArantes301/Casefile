const { Router } = require('express')
const characterController = require('../controllers/characterController')

const router = Router()

router.post("/create", characterController.customPlayer)
router.get('/random', characterController.randomPlayer)
router.get('/list', characterController.getAll)

module.exports = router;