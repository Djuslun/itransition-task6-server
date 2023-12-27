const CanvasModel = require('../models/canvasModel')

class CanvasServise {
  async createCanvas(canvas, lastUpdater) {
    const createdCanvas = await CanvasModel.create({ shapes: canvas, lastUpdater })
    return createdCanvas
  }

  async updateCanvas(canvas, user, canvasId) {
    const updatedCanvas = await CanvasModel.findByIdAndUpdate(
      { _id: canvasId },
      { $set: { shapes: canvas, lastUpdater: user } },
      { new: true })
    return updatedCanvas
  }

  async getCanvasById(id) {
    return await CanvasModel.findById(id)
  }

  async getAllCanvases() {
    return await CanvasModel.find()
  }

  async deleteCanvas(id) {
    return await CanvasModel.findByIdAndDelete(id)
  }
}

module.exports = new CanvasServise()