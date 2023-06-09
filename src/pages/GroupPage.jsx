import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGroupsStore, useStudentsStore, useRateButtonStore } from '../store'

import AllStudents from '../components/AllStudents/AllStudents'
import CreateStudent from '../components/CreateStudent'
import RateStudents from '../components/RateStudents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChildren,
  faFaceLaughWink,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'

export default function SingleGroup() {
  const { id } = useParams()
  const { getSingleGroup, deleteGroup, updateGroup, groupId, registers } =
    useGroupsStore()

  const { students } = useStudentsStore()

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [activeGroup, setActiveGroup] = useState({
    _id: '',
    body: '',
    completed: false,
    category: '',
    institution: '',
    days: ''
  })
  const [updatedBody, setUpdatedBody] = useState('')
  const [updatedCompleted, setUpdatedCompleted] = useState(false)
  const [updatedCategory, setUpdatedCategory] = useState('')
  const [updatedInstitution, setUpdatedInstitution] = useState('')
  const [updatedDays, setUpdatedDays] = useState('')

  const { toggleRateButton, isPressed } = useRateButtonStore()

  const toggleRateForm = () => {
    toggleRateButton()
  }

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
      setUpdatedInstitution(activeGroup.institution)
      setUpdatedDays(activeGroup.days)
    }
  }, [editing, activeGroup])
  // }, [])

  const updateGroupAndRefresh = async () => {
    await updateGroup(
      activeGroup._id,
      updatedBody,
      updatedCompleted,
      updatedCategory,
      updatedInstitution,
      updatedDays
    )
    setActiveGroup((prev) => ({
      _id: prev._id,
      body: updatedBody,
      completed: updatedCompleted,
      category: updatedCategory,
      institution: updatedInstitution,
      days: updatedDays
    }))
  }

  const handleEditForm = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setUpdatedCompleted(checked)
    } else {
      const stateUpdater = {
        body: setUpdatedBody,
        category: setUpdatedCategory,
        institution: setUpdatedInstitution,
        days: setUpdatedDays
      }[name]
      if (stateUpdater) {
        stateUpdater(value)
      }
    }
  }

  const handleDelete = () => {
    deleteGroup(activeGroup._id)
    window.location.href = 'http://localhost:3000/'
  }

  const handleEditToggle = () => {
    if (editing) {
      updateGroupAndRefresh()
    }
    setEditing((prev) => !prev)
  }

  return (
    <div>
      {loading && <p>loading...</p>}
      {!loading && (
        <main className="profile-page">
          <section className="relative block" style={{ height: '500px' }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
              }}
            ></div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: '70px' }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative"></div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <div className="flex flex-wrap">
                      <div className="w-full px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                {/* <h5 className="text-blueGray-400 uppercase font-semibold text-xs"> */}
                                <>
                                  {!editing && (
                                    <div className="flex flex-wrap justify-center">
                                      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div className="bg-white rounded-lg shadow-lg p-6 border border-solid">
                                          <span className="font-bold text-2xl text-blueGray-700">
                                            {activeGroup.category}
                                          </span>
                                          <h5 className="text-4xl font-bold mb-2">
                                            {activeGroup.body}
                                          </h5>
                                          {/* <div className="flex items-center mb-4 "> */}
                                          <div className="flex items-center justify-center mb-4">
                                            {activeGroup.category ===
                                            'children' ? (
                                              <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 mr-4">
                                                <FontAwesomeIcon
                                                  icon={faChildren}
                                                />
                                              </div>
                                            ) : activeGroup.category ===
                                              'teens' ? (
                                              <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500 mr-4">
                                                <FontAwesomeIcon
                                                  icon={faFaceLaughWink}
                                                />
                                              </div>
                                            ) : activeGroup.category ===
                                              'intensive' ? (
                                              <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-900 mr-4">
                                                <FontAwesomeIcon
                                                  icon={faUserGroup}
                                                />
                                              </div>
                                            ) : (
                                              <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500 mr-4">
                                                <i className="far fa-chart-bar"></i>
                                              </div>
                                            )}
                                            <div className="flex justify-center items-center">
                                              <div className="flex flex-col">
                                                <p className="text-sm text-blueGray-400">
                                                  <strong> classes on: </strong>
                                                  {activeGroup.days}
                                                </p>
                                                <p className="text-sm text-blueGray-400">
                                                  <strong> at: </strong>
                                                  {activeGroup.institution}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <p className="text-sm text-blueGray-400">
                                            {activeGroup.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {editing && (
                                    <div>
                                      <label htmlFor="group-name">
                                        Group's name:
                                      </label>
                                      <input
                                        type="text"
                                        id="group-name"
                                        name="body"
                                        value={updatedBody}
                                        onChange={handleEditForm}
                                        className="border rounded px-2 py-1"
                                      />
                                      <br />
                                      <label htmlFor="group-category">
                                        Group's category:
                                      </label>
                                      <select
                                        name="category"
                                        id="group-category"
                                        value={updatedCategory}
                                        onChange={handleEditForm}
                                        className="border rounded px-2 py-1"
                                      >
                                        <option value="">
                                          Select a category
                                        </option>
                                        <option value="children">
                                          Children
                                        </option>
                                        <option value="teens">Teens</option>
                                        <option value="adults">Adults</option>
                                        <option value="intensive">
                                          Intensive
                                        </option>
                                      </select>
                                      <br />

                                      <label htmlFor="institution">
                                        Institution:
                                      </label>
                                      <input
                                        type="text"
                                        name="institution"
                                        value={updatedInstitution}
                                        onChange={handleEditForm}
                                        className="border rounded px-2 py-1"
                                      />
                                      <br />
                                      <label htmlFor="days">Days:</label>

                                      <input
                                        type="text"
                                        name="days"
                                        value={updatedDays}
                                        onChange={handleEditForm}
                                        className="border rounded px-2 py-1"
                                      />
                                      <br />
                                    </div>
                                  )}
                                </>
                                <div className="flex flex-wrap py-2">
                                  <div className="w-full px-4">
                                    <nav className="flex items-center justify-between bg-zinc-500 rounded-lg px-4 py-3">
                                      <button
                                        className={`${
                                          isPressed
                                            ? ' bg-zinc-900 '
                                            : '  bg-zinc-500 '
                                        }flex items-center text-white font-bold text-sm mr-4 py-2 px-4 border border-white rounded-lg shadow hover:opacity-75`}
                                        onClick={toggleRateForm}
                                      >
                                        Rate Students
                                      </button>
                                      <div className="flex items-center">
                                        <button
                                          className="flex items-center text-white font-bold text-xs mr-2 py-1 px-3 rounded-lg hover:opacity-75"
                                          onClick={handleEditToggle}
                                        >
                                          {editing ? 'Save' : 'Edit'}
                                        </button>
                                        <a
                                          className="flex items-center text-white font-bold text-xs py-1 px-3 rounded-lg hover:opacity-75"
                                          onClick={handleDelete}
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </nav>
                                  </div>
                                </div>
                                {isPressed && (
                                  <RateStudents
                                    students={students}
                                    groupId={groupId}
                                    registers={registers}
                                    toggleRateForm={toggleRateForm}
                                  />
                                )}
                                <div className="studentsGrid">
                                  <div className="studentsHeader">
                                    <AllStudents />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <CreateStudent />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  )
}
