import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useController } from '../Controller'

export default function StudentPage() {
  const { id } = useParams()

  const { getSingleStudent, deleteStudent, updateStudent } = useController()

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [activeStudent, setActiveStudent] = useState({
    _id: '',
    body: '',
    group: '',
    email: '',
    telephone: '',
    address: ''
  })

  const [updatedBody, setUpdatedBody] = useState('')
  const [updatedEmail, setUpdatedEmail] = useState('')
  const [updatedTelephone, setUpdatedTelephone] = useState('')
  const [updatedAddress, setUpdatedAddress] = useState('')
  const [updatedGroup, setUpdatedGroup] = useState('')

  const fetchAndLoadStudent = async () => {
    setLoading(true)
    try {
      const group = await getSingleStudent(id)
      setActiveStudent(group)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAndLoadStudent()
  }, [])

  useEffect(() => {
    if (editing && activeStudent.body) {
      setUpdatedBody(activeStudent.body)
      setUpdatedEmail(activeStudent.email)
      setUpdatedTelephone(activeStudent.telephone)
      setUpdatedAddress(activeStudent.address)
      setUpdatedGroup(activeStudent.group)
    }
  }, [editing])

  const updateStudentAndRefresh = async () => {
    await updateStudent(
      activeStudent._id,
      updatedBody,
      updatedEmail,
      updatedTelephone,
      updatedAddress,
      updatedGroup
    )
    setActiveStudent((prev) => ({
      _id: prev._id,
      body: updatedBody,
      email: updatedEmail,
      telephone: updatedTelephone,
      address: updatedAddress,
      group: updatedGroup
    }))
  }

  const handleEditForm = (e) => {
    if (e.target.name === 'body') {
      setUpdatedBody(e.target.value)
    } else if (e.target.name === 'email') {
      setUpdatedEmail(e.target.value)
    } else if (e.target.name === 'telephone') {
      setUpdatedTelephone(e.target.value)
    } else if (e.target.name === 'address') {
      setUpdatedAddress(e.target.value)
    } else if (e.target.name === 'group') {
      setUpdatedGroup(e.target.value)
    }
  }

  const handleDelete = () => {
    deleteStudent(activeStudent._id)
  }

  const handleEditToggle = () => {
    if (editing) {
      updateStudentAndRefresh()
    }
    setEditing((prev) => !prev)
  }

  return (
    <div>
      <h1>Student Page</h1>
      {loading && <p>loading...</p>}
      {!loading && activeStudent && (
        <>
          <button onClick={handleEditToggle}>
            {editing ? 'Save' : 'Edit'}
          </button>{' '}
          {!editing && <button onClick={handleDelete}>Delete</button>}
          {editing ? (
            <>
              {/* <input
                type="text"
                value={updatedBody}
                onChange={handleEditForm}
                name="body"
                style={{
                  width: 300
                }}
              /> */}
              <label>
                Body:
                <input
                  type="text"
                  value={updatedBody}
                  onChange={handleEditForm}
                  name="body"
                  style={{
                    width: 300
                  }}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="text"
                  value={updatedEmail}
                  onChange={handleEditForm}
                  name="email"
                />
              </label>
              <br />
              <label>
                Telephone:
                <input
                  type="text"
                  value={updatedTelephone}
                  onChange={handleEditForm}
                  name="telephone"
                />
              </label>
              <br />
              <label>
                Address:
                <input
                  type="text"
                  value={updatedAddress}
                  onChange={handleEditForm}
                  name="address"
                />
              </label>
              <br />

              {/* <label>
                Group:
                <select
                  name="group"
                  value={updatedGroup}
                  onChange={handleEditForm}
                >
                  {groups.map((group) => (
                    <option key={group._id} value={group._id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </label> */}
            </>
          ) : (
            <p>
              {/* {activeStudent.body}
              <p>Group: {activeStudent.group}</p> */}
              <strong>Body:</strong> {activeStudent.body} <br />
              <strong>Email:</strong> {activeStudent.email} <br />
              <strong>Telephone:</strong> {activeStudent.telephone} <br />
              <strong>Address:</strong> {activeStudent.address} <br />
              <strong>Group:</strong> {activeStudent.group} <br />
            </p>
          )}
        </>
      )}
    </div>
  )
}
