const express = require('express')
const router = express.Router()

/**
 * Models
 */
const Student = require('../models/students')
const {
  getAllStudents,
  getSingleStudent
} = require('../services/studentService')

// Read all
router.get('/', async (req, res) => {
  try {
    const students = await getAllStudents()
    res.status(200).json(students)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Create
router.post('/', async (req, res) => {
  try {
    const { body } = req
    // const { id } = req.params
    const createdStudent = await Student.create({ ...body })
    return res.json(createdStudent)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Update
router.put('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      // ...req.body
      req.body,
      {
        new: true
      }
    )
    return res.json(updatedStudent)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const deletedStudent = await Student.findByIdAndDelete(id)
    // console.log('router delete')
    return res.json(deletedStudent)
  } catch (error) {
    console.log('error')
    res.status(500).json({ error })
  }
})

// read one
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const student = await getSingleStudent(id)
    return res.json(student)
  } catch (error) {
    res.status(500).json({ error })
  }
})

//

module.exports = router
