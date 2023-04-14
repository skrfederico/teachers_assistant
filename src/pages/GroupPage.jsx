import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useController } from '../Controller'

import AllStudents from '../components/AllStudents/AllStudents'
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
  const [updatedCategory, setUpdatedCategory] = useState('')
  const [updatedDays, setUpdatedDays] = useState('')
  const [showRateForm, setShowRateForm] = useState(false)

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
    <div className="groupCard">
      {/* <h1>Group Page</h1> */}
      <div>
        {loading && <p>loading...</p>}
        {!loading && activeGroup && (
          <>
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
              <>
                <h3>{activeGroup.body}</h3>
                {/* <p>Completed: {activeGroup.completed ? 'Yes' : 'No'}</p> */}
                <p>Category: {activeGroup.category}</p>
                <p>Days: {activeGroup.days}</p>
              </>
            )}
          </>
        )}
        <div className="studentsGrid">
          <div className="studentsHeader">
            <AllStudents />
          </div>
        </div>

        <div class="flex flex-wrap py-2">
          <div class="w-full px-4">
            <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-500 rounded">
              <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                  <a
                    class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    onClick={() => setShowRateForm((prev) => !prev)}
                  >
                    {showRateForm ? 'Close' : 'Rate Students'}{' '}
                  </a>
                  <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  </button>
                </div>
                <div
                  class="flex lg:flex-grow items-center"
                  id="example-navbar-info"
                >
                  <ul class="flex flex-row list-none ml-auto">
                    <li class="nav-item">
                      <button
                        class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        onClick={handleEditToggle}
                      >
                        {editing ? 'Save' : 'Edit'}
                      </button>
                    </li>
                    {/* <li class="nav-item">
                      <a
                        class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        onClick={() => setShowRateForm((prev) => !prev)}
                      >
                        {showRateForm ? 'Close' : 'Rate Students'}
                      </a>
                    </li> */}
                    <li class="nav-item">
                      <a
                        class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        onClick={handleDelete}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

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
