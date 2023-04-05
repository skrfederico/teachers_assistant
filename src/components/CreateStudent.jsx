import React, { useState } from 'react'
import { useController } from '../Controller'
import { useParams } from 'react-router-dom'

export default function CreateStudent() {
  const { createStudent } = useController()
  const [input, setInput] = useState('')
  const { id } = useParams()
  const [groupId, setGroupId] = useState(id)

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    createStudent({
      body: input,
      group: groupId
    })
    setInput('')
    setGroupId(id)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div>
      <h1>Create Student</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div>
          <button onClick={handleSubmit}>Submit Student</button>
        </div>
      </div>
    </div>
  )
}
