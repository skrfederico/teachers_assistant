import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGroupsStore } from '../store'

import AllStudents from '../components/AllStudents/AllStudents'

export default function RateStudentPage() {
  const { id } = useParams()

  const { getSingleGroup } = useGroupsStore()

  const [loading, setLoading] = useState(false)
  const [group, setGroup] = useState(null)
  const [students, setStudents] = useState([])
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0)
  const [attendance, setAttendance] = useState(false)
  const [homeworkCompletion, setHomeworkCompletion] = useState(false)
  const [performance, setPerformance] = useState('')

  const fetchAndLoadGroup = async () => {
    setLoading(true)
    try {
      const group = await getSingleGroup(id)
      // setActiveGroup(group)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAndLoadGroup()
  }, [])

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.checked)
  }

  const handleHomeworkCompletionChange = (e) => {
    setHomeworkCompletion(e.target.checked)
  }

  const handlePerformanceChange = (e) => {
    setPerformance(e.target.value)
  }

  const handleNextClick = async () => {
    try {
      const registerData = {
        student: students[currentStudentIndex]._id,
        group: group._id,
        attendance: attendance,
        hwCompletion: homeworkCompletion,
        participation: performance
      }
      setCurrentStudentIndex((prevIndex) => prevIndex + 1)
      setAttendance(false)
      setHomeworkCompletion(false)
      setPerformance('')
    } catch (error) {
      console.error(error)
    }
  }

  const currentStudent = students[currentStudentIndex]

  return (
    <div>
      <h1>Rate Students</h1>
      {loading && <p>Loading...</p>}
      {group && (
        <>
          <h2>Group: {group.body}</h2>
          <h3>Students:</h3>
          <ul>
            {students.map((student) => (
              <li key={student.id}>{student.body}</li>
            ))}
          </ul>
          <h3>Rate Student</h3>
          <p>
            <strong>Student:</strong> {currentStudent.body}
          </p>
          <label>
            Attendance:
            <input
              type="checkbox"
              checked={attendance}
              onChange={handleAttendanceChange}
            />
          </label>
          <br />
          <label>
            Homework completion:
            <input
              type="checkbox"
              checked={homeworkCompletion}
              onChange={handleHomeworkCompletionChange}
            />
          </label>
          <br />
          <label>
            Performance:
            <select value={performance} onChange={handlePerformanceChange}>
              <option value="">Select</option>
              <option value="A">Excellent</option>
              <option value="B">Good</option>
              <option value="C">Fair</option>
              <option value="D">Poor</option>
            </select>
          </label>
          <br />
          <button onClick={handleNextClick}>Next Student</button>
        </>
      )}
      <AllStudents />
    </div>
  )
}
