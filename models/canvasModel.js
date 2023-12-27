const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  id: String,
  name: String
})

const CanvasSchema = new Schema({
  shapes: { type: Array, required: true },
  lastUpdater: { type: UserSchema, default: {} },
})

module.exports = model('canvas', CanvasSchema)