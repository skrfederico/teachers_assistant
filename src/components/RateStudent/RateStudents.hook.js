import { useState } from 'react'

export const useRateStudents = (students = []) => {
  const [currentIndexStudent, setCurrentIndexStudent] = useState(
    students[0]._id
  )
  const [position, setPosition] = useState(0)

  const currentIndex = () => {
    if (!hasNextStudent()) return -1
    return students[position]._id
  }

  const hasNextStudent = () => {
    if (students.length === 0) {
      return false
    }
    return position < students.length
  }

  const nextStudent = () => {
    if (hasNextStudent()) {
      setPosition(position + 1)
      setCurrentIndexStudent(students[position]._id)
    }
  }

  return {
    currentIndex,
    nextStudent,
    hasNextStudent
  }
}
