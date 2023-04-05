const express = require('express')
const router = express.Router()

/**
 * Models
 */
const Group = require('../models/groups')

// Read all
router.get('/', async (req, res) => {
  try {
    const query = await Group.find({})
    // const query = await Group.find({}).populate('students')
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Create
router.post('/', async (req, res) => {
  try {
    const createdGroup = await Group.create({ ...req.body })
    return res.json(createdGroup)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Update
router.put('/:id', async (req, res) => {
  const { id } = req.params
  console.log('body', req.body)
  console.log('params', req.params)
  // const { days } = req.body
  console.log('Received PUT request for Review with ID', id)
  try {
    const updatedGroup = await Group.findByIdAndUpdate(id, req.body, {
      new: true
    })
    console.log('Successfully updated bookmark with ID', id)
    return res.json(updatedGroup)
  } catch (error) {
    console.log('Error updating bookmark with ID', id, ':', error)
    res.status(500).json({ error })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const deletedGroup = await Group.findByIdAndDelete(id)
    // console.log('router delete')
    return res.json({ message: 'Group deleted successfully' })
  } catch (error) {
    console.log('error')
    res.status(500).json({ error })
  }
})

// read one
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const query = await Group.findOne({ _id: id })
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})
module.exports = router
