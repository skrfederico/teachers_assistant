import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useController } from '../Controller'

export default function SingleGroup() {
  const { id } = useParams()

  const { getSingleGroup, updateGroup, deleteGroup } = useController()

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [activeGroup, setActiveGroup] = useState({
    body: ''
  })

  const fetchAndLoadGroup = async () => {
    setLoading(true)
    try {
      const group = await getSingleGroup(id)
      console.log(group)
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

  const handleDelete = () => {
    deleteGroup(activeGroup._id)
  }

  const handleEditToggle = () => {
    setEditing((prev) => !prev)
  }

  return (
    <div className="singletodo">
      <h1>Single Group</h1>
      {/* <p>{group.body}</p> */}
      {loading && <p>loading...</p>}
      {!loading && activeGroup && (
        <>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {editing ? (
            <input
              type="text"
              defaultValue={activeGroup.body}
              // value={activeNote.body}
              style={{
                width: 300
              }}
            />
          ) : (
            <p>{activeGroup.body}</p>
          )}
        </>
      )}
    </div>
  )
}
