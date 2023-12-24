const Router = require('express')
const canvasController = require('./controller/canvasController')
const router = new Router()

router.get('/', canvasController.getAllCanvases)
router.get('/:canvasId', canvasController.getCanvasById)
router.post('/create', canvasController.createCanvas)
router.put('/:canvasId', canvasController.updeteCanvas)

module.exports = router 