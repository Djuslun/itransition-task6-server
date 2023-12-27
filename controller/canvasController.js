const canvasService = require('../servises/canvasServise')
const events = require('events')
const emitter = new events.EventEmitter();

class CanvasController {
  async createCanvas(req, res) {
    try {
      const createdCanvas = await canvasService.createCanvas([], {})
      return res.json(createdCanvas)
    } catch (e) {
      return res.status(500).json()
    }
  }

  async updateCanvas(req, res) {
    try {
      const { canvasId } = req.params
      const { shapes, user } = req.body
      const updatedCanvas = await canvasService.updateCanvas(shapes, user, canvasId)
      emitter.emit('changedCanvas', updatedCanvas);
      return res.json(updatedCanvas)
    } catch (e) {
      console.log(e)
      return res.status(500).json()
    }
  }

  async getChangedCanvas(req, res) {
    emitter.once('changedCanvas', (canvas) => {
      return res.json(canvas);
    });
  }

  async getCanvasById(req, res) {
    try {
      const { canvasId } = req.params
      const canvas = await canvasService.getCanvasById(canvasId)
      return res.json(canvas)
    } catch (e) {
      return res.status(500).json()
    }
  }

  async deleteCanvas(req, res) {
    try {
      const { canvasId } = req.params
      const deletedCanvas = await canvasService.deleteCanvas(canvasId)
      res.json(deletedCanvas)
    } catch (e) {
      return res.status(500)

    }
  }

  async getAllCanvases(req, res) {
    try {
      const canvasList = await canvasService.getAllCanvases()
      return res.json(canvasList)
    } catch (e) {
      return res.status(500).json()
    }
  }
}

module.exports = new CanvasController()