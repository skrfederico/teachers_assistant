const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const groupSchema = new mongoose.Schema({
  body: { type: String, required: true },
  completed: { type: Boolean, default: false },
  category: {
    type: String,
    enum: ['children', 'teens', 'adults', 'intensive']
  },
  days: {
    type: String
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Students' }]

  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})
// console.log(groupSchema.createdAt)
// console.log('schema')

const Group = mongoose.model('Group', groupSchema)

module.exports = Group
