const canvasService = require('../servises/canvasServise')

class CanvasController {
  async createCanvas(req, res) {
    try {
      const createdCanvas = await canvasService.createCanvas([])
      return res.json(createdCanvas)
    } catch (e) {
      return res.status(500)
    }
  }

  async updeteCanvas(req, res) {
    try {
      const canvasId = req.params
      const { canvas } = req.body
      const updatedCanvas = await canvasService.updateCanvas(canvas, canvasId)
      return res.json(updatedCanvas)
    } catch (e) {
      return res.status(500)

    }
  }

  async getCanvasById(req, res) {
    try {
      const canvasId = req.params
      const canvas = await canvasService.getCanvasById(canvasId)
      return res.json(canvas)
    } catch (e) {
      return res.status(500)
    }
  }

  // async deleteCanvas(req, res) {
  //   try {

  //   } catch (e) {
  //     return res.status(500)

  //   }
  // }

  async getAllCanvases(req, res) {
    try {
      const canvasList = await canvasService.getAllCanvases()
      return res.json(canvasList)
    } catch (e) {
      return res.status(500)
    }
  }
}

module.exports = new CanvasController()