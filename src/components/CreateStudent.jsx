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
      <br></br>
      <div class="relative w-full flex-wrap items-stretch mb-3">
        <div className="mb-3 pt-0">
          <input
            type="text"
            style={{ width: 300 }}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Student's name"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        // style={{ display: 'flex-end' }}
        class="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Submit Student
      </button>
    </div>
  )
}
