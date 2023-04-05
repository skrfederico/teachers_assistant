import React, { useState } from 'react'
// this is gonna make the api request to our backend
// (CORE ACTION) above //// local below
import { useController } from '../Controller'

export default function CreateGroup() {
  const { createGroup } = useController()

  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    //  console.log(event.target.value)
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
    <div>
      <h1>Create Group</h1>
      <div
      // style={{width:300}}
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div>
          <button
            onClick={handleSubmit}
            // style={{display: "flex-end"}}
          >
            Submit Group
          </button>
        </div>
      </div>
    </div>
  )
}
