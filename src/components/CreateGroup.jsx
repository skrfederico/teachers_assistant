import React, { useState } from 'react'
// this is gonna make the api request to our backend
// (CORE ACTION) above //// local below

// import { useController } from '../Controller'
import { useGroupsStore } from '../store'

// before Zustand
export default function CreateGroup() {
  // // before ZuStand
  // const { createGroup } = useController()

  //with ZuStand
  const { createGroup } = useGroupsStore()

  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    createGroup(input)
    setInput('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <>
      <div className="mb-3 pt-0">
        <input
          type="text"
          style={{ width: 300 }}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Group name"
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Create Group
      </button>
    </>
  )
}
