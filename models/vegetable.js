import mongoose from 'mongoose'
const Schema = mongoose.Schema

const vegetableSchema = new Schema({
  name: String,
  size: String,
  price: Number,
  green: Boolean
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

export {
  Vegetable
}