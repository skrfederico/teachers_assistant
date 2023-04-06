import { useState } from 'react'

export const useRateStudents = (student = []) => {
  const [currentIndexStudent, setCurrentIndexStudent] = useState(0)

  const hasNextStudent = () => {
    if (student.length === 0) {
      return false
    }
    return currentIndexStudent < student.length
  }

  const nextStudent = () => {
    if (hasNextStudent()) {
      setCurrentIndexStudent(currentIndexStudent + 1)
    }
  }

  return {
    currentIndexStudent,
    nextStudent,
    hasNextStudent
  }
}
