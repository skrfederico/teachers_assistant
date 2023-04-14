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
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Student's name"
          class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
        />
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
          <i class="fas fa-user"></i>
        </span>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Submit student
        </button>
      </div>
    </div>
  )
}
