const { Schema, model } = require('mongoose')

const CanvasSchema = new Schema({
  shapes: { type: Array, required: true },
})

module.exports = model('canvas', CanvasSchema)