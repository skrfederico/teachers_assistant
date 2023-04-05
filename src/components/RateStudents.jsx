import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function RateStudents({ students, groupId, registers }) {
  const { id } = useParams()

  const [ratings, setRatings] = useState({})
  const [currentStudent, setCurrentStudent] = useState(students[0])

  const handleRatingChange = (e) => {
    const { name, value } = e.target
    setRatings((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStudent = (student) => {
    const currentIndex = students.indexOf(student)
    if (currentIndex < students.length - 1) {
      setCurrentStudent(students[currentIndex + 1])
    } else {
      setCurrentStudent(null)
    }
  }

  const handleStartRating = () => {
    if (filteredStudents.length > 0) {
      setCurrentStudent(filteredStudents[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ratings)
    // Do something with the ratings
  }

  useEffect(() => {
    handleStartRating()
  }, [])

  const filteredStudents = students.filter((student) => student.group === id)
  console.log(filteredStudents)

  return (
    <div className="allstudents">
      <div className="bottomContainer">
        {filteredStudents.length === 0 && (
          <p>You have no students in this group!</p>
        )}
        {filteredStudents.length > 0 && (
          <ul>
            {filteredStudents.map((student) => {
              return (
                <div key={student._id}>
                  {currentStudent && currentStudent._id === student._id && (
                    <div>
                      <h3>
                        <strong>{currentStudent.body}</strong>
                      </h3>
                      <div>
                        <label>
                          Attendance:
                          <input
                            type="checkbox"
                            name="attendance"
                            defaultChecked
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Homework Completion:
                          <input
                            type="checkbox"
                            name="homework"
                            defaultChecked
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Participation:
                          <select name="participation" defaultValue="">
                            <option value="" disabled>
                              -- Choose a rating --
                            </option>
                            <option value="A">A - Excellent</option>
                            <option value="B">B - Good</option>
                            <option value="C">C - Above Average</option>
                            <option value="D">D - Average</option>
                            <option value="E">E - Below Average</option>
                            <option value="F">F - Poor</option>
                          </select>
                        </label>
                      </div>
                      <button onClick={() => handleNextStudent(currentStudent)}>
                        Next Student
                      </button>
                    </div>
                  )}
                  {!currentStudent ||
                    (currentStudent._id !== student._id && (
                      <div>
                        <h3>
                          <strong>{student.body}</strong>
                        </h3>
                        <button onClick={() => handleStartRating(student)}>
                          Start Rating
                        </button>
                      </div>
                    ))}
                </div>
              )
            })}
            {!currentStudent && (
              <div>
                <h3>End of List</h3>
                <button onClick={handleSubmit}>Submit Ratings</button>
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
