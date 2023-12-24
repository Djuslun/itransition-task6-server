const Router = require('express')
const canvasController = require('./controller/canvasController')
const router = new Router()

router.get('/changeCanvas', canvasController.getChangedCanvas)
router.get('/', canvasController.getAllCanvases)
router.get('/:canvasId', canvasController.getCanvasById)
router.post('/create', canvasController.createCanvas)
router.put('/:canvasId', canvasController.updateCanvas)

module.exports = router 