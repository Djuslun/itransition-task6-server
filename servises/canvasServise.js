const CanvasModel = require('../models/canvasModel')

class CanvasServise {
  async createCanvas(canvas) {
    const createdCanvas = await CanvasModel.create(canvas)
    return createdCanvas
  }

  async updateCanvas(canvas, canvasId) {
    const updatedCanvas = await CanvasModel.updateOne(
      canvasId,
      { $set: { shapes: canvas } },
      { new: true })
    return updatedCanvas
  }

  async getCanvasById(id) {
    return await CanvasModel.findById(id)
  }

  async getAllCanvases() {
    return await CanvasModel.find()
  }
}

module.exports = new CanvasServise()