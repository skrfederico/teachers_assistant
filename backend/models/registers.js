const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const registerSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  attendance: { type: Boolean },
  hwCompletion: { type: Boolean },
  participation: { type: String, enum: ['A', 'B', 'C', 'D', 'E', 'F'] },
  date: { type: Date, default: new Date() }
})
// console.log(studentSchema.createdAt)
// console.log('schema')

const Register = mongoose.model('Register', registerSchema)

module.exports = Register
