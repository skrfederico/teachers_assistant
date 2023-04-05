const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const studentSchema = new mongoose.Schema({
  body: { type: String, required: true },
  attendance: { type: Number, default: 100 },
  hwCompletion: { type: Number, default: 100 },
  participation: { type: String, enum: ['A', 'B', 'C', 'D', 'E', 'F'] },
  email: { type: String },
  telephone: { type: String },
  address: { type: String },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }
})
// console.log(studentSchema.createdAt)
// console.log('schema')

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
