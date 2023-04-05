const express = require('express')
const router = express.Router()

/**
 * Models
 */
const Register = require('../models/registers')

// Read all
router.get('/', async (req, res) => {
  try {
    const query = await Register.find({})
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Create
router.post('/', async (req, res) => {
  try {
    // const { body } = req
    const createdRegister = await Register.create({ ...body })
    return res.json(createdRegister)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Update
router.put('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const updatedRegister = await Register.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(updatedRegister)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedRegister = await Register.findByIdAndDelete(id)
    return res.json(deletedRegister)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Read one
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const query = await Register.findOne({ _id: id })
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
