import React, { useState } from 'react'

export default function RateStudents({ students, groupId, registers }) {
  const [ratings, setRatings] = useState({})

  const handleRatingChange = (e) => {
    const { name, value } = e.target
    setRatings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ratings)
    // Do something with the ratings
  }

  return (
    <>
      {students
        .filter((student) => student.groupId === groupId) // only rate students in the same group as the URL
        .map((student) => {
          const register = registers.find((r) => r.student === student._id) // find the register for this student
          const rating = register ? register.participation : '' // get the rating if the student has been rated

          return (
            <div key={student._id}>
              <h3 style={register ? { textDecoration: 'line-through' } : {}}>
                {student.name}
              </h3>
              <label>
                Rating:
                <select
                  name={student._id}
                  value={rating}
                  onChange={handleRatingChange}
                >
                  <option value="">--Choose a rating--</option>
                  <option value="A">5 - Excellent</option>
                  <option value="B">4 - Good</option>
                  <option value="C">3 - Average</option>
                  <option value="D">2 - Poor</option>
                  <option value="E">1 - Very Poor</option>
                </select>
              </label>
            </div>
          )
        })}
      <button onClick={handleSubmit}>Submit Ratings</button>
    </>
  )
}
