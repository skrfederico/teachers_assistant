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
    <div>
      <div className="groupCard">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                  <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 className="text-blueGray-400 uppercase font-semibold text-xs">
                      {activeGroup.category}
                    </h5>
                    <span className="font-bold text-2xl text-blueGray-700">
                      {activeGroup.body}
                    </span>
                  </div>
                  <div className="relative w-auto flex-initial">
                    <div className="text-white  text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                      <i className="far fa-chart-bar"></i>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-blueGray-400 mt-2">
                  {/* <span className="text-emerald-500 mr-2">
                    <i className="fas fa-arrow-up"></i> 3
                  </span>
                  <span className="whitespace-nowrap">
                    Category: {activeGroup.category}
                  </span> */}
                  Classes on: {activeGroup.days}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <></>
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
