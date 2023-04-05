import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useController } from '../Controller'

import AllStudents from '../components/AllStudents'
import CreateStudent from '../components/CreateStudent'
import RateStudents from '../components/RateStudents'

export default function SingleGroup() {
  const { id } = useParams()

  const {
    getSingleGroup,
    deleteGroup,
    updateGroup,
    students,
    groupId,
    registers
  } = useController()

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [activeGroup, setActiveGroup] = useState({
    _id: '',
    body: '',
    completed: false, // default value is false
    category: '',
    days: ''
  })
  const [updatedBody, setUpdatedBody] = useState('')
  const [updatedCompleted, setUpdatedCompleted] = useState(false)
  //added states on Thursday - just a string
  const [updatedCategory, setUpdatedCategory] = useState('')
  const [updatedDays, setUpdatedDays] = useState('')
  const [showRateForm, setShowRateForm] = useState(false)

  // const [updatedCategory, setUpdatedCategory] = useState(activeGroup.category)
  // const [updatedDays, setUpdatedDays] = useState(activeGroup.days)

  const fetchAndLoadGroup = async () => {
    setLoading(true)
    try {
      const group = await getSingleGroup(id)
      setActiveGroup(group)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAndLoadGroup()
  }, [])

  useEffect(() => {
    if (editing && activeGroup.body) {
      setUpdatedBody(activeGroup.body)
      setUpdatedCompleted(activeGroup.completed)
      setUpdatedCategory(activeGroup.category)
      setUpdatedDays(activeGroup.days)
    }
  }, [editing])

  const updateGroupAndRefresh = async () => {
    await updateGroup(
      activeGroup._id,
      updatedBody,
      updatedCompleted,
      updatedCategory,
      updatedDays
    )
    setActiveGroup((prev) => ({
      _id: prev._id,
      body: updatedBody,
      completed: updatedCompleted,
      //added Thursday
      category: updatedCategory,
      days: updatedDays
    }))
  }

  // const handleEditForm = (e) => {
  //   if (e.target.name === 'body') {
  //     setUpdatedBody(e.target.value)
  //   } else if (e.target.name === 'completed') {
  //     setUpdatedCompleted(e.target.checked)
  //     //added Thursday
  //   } else if (e.target.name === 'category') {
  //     setUpdatedCategory(e.target.value)
  //   } else if (e.target.name === 'days') {
  //     setUpdatedDays(e.target.value)
  //   }
  // }

  const handleEditForm = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setUpdatedCompleted(checked)
    } else {
      const stateUpdater = {
        body: setUpdatedBody,
        category: setUpdatedCategory,
        days: setUpdatedDays
      }[name]
      stateUpdater(value)
    }
  }

  const handleDelete = () => {
    deleteGroup(activeGroup._id)
  }

  const handleEditToggle = () => {
    if (editing) {
      updateGroupAndRefresh()
    }
    setEditing((prev) => !prev)
  }

  return (
    <div>
      <h1>Group Page</h1>
      {loading && <p>loading...</p>}
      {!loading && activeGroup && (
        <>
          <button onClick={handleEditToggle}>
            {editing ? 'Save' : 'Edit'}
          </button>{' '}
          <button onClick={handleDelete}>Delete</button>{' '}
          <button onClick={() => setShowRateForm((prev) => !prev)}>
            {showRateForm ? 'Close' : 'Rate Students'}
          </button>
          {editing ? (
            <>
              <input
                type="text"
                value={updatedBody}
                onChange={handleEditForm}
                name="body"
                style={{
                  width: 300
                }}
              />
              <label>
                Completed:
                <input
                  type="checkbox"
                  checked={updatedCompleted}
                  onChange={handleEditForm}
                  name="completed"
                />
              </label>
              <br />
              <label>
                Category:
                <select
                  value={updatedCategory}
                  onChange={handleEditForm}
                  name="category"
                >
                  <option value="children">Children</option>
                  <option value="teens">Teens</option>
                  <option value="adults">Adults</option>
                  <option value="intensive">Intensive</option>
                </select>
              </label>
              <br />
              <label>
                Days:
                <input
                  type="text"
                  value={updatedDays}
                  onChange={handleEditForm}
                  name="days"
                />
              </label>
            </>
          ) : (
            <p>
              {activeGroup.body}
              <p>Completed: {activeGroup.completed ? 'Yes' : 'No'}</p>
              <p>Category: {activeGroup.category}</p>
              <p>Days: {activeGroup.days}</p>
            </p>
          )}
        </>
      )}
      <AllStudents />

      {showRateForm && (
        <RateStudents
          students={students}
          groupId={groupId}
          registers={registers}
        />
      )}
      <CreateStudent />
    </div>
  )
}
