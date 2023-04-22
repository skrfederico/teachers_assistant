import React, { useEffect } from 'react'
import { useStudentsStore } from '../store'
import { useParams } from 'react-router-dom'
import { RateStudentForm } from './RateStudent/RateStudentForm'
import { useRateStudents } from './RateStudent/RateStudents.hook'

export default function RateStudents({ toggleRateForm }) {
  const { students } = useStudentsStore()
  const { id } = useParams()

  const filteredStudents = students.filter((student) => student.group === id)

  const { currentIndex, hasNextStudent, nextStudent, position } =
    useRateStudents(filteredStudents)

  //FUTURE FIX: instead of putting it here, it should be in the onChange (GroupPage)
  useEffect(() => {
    if (!hasNextStudent()) toggleRateForm()
  }, [position])

  return (
    <div className="allstudents">
      <div className="bottomContainer">
        {filteredStudents.length === 0 ? (
          <p>You have no students in this group!</p>
        ) : (
          <ul>
            {filteredStudents.map((student) => (
              <div
                key={student._id}
                style={{
                  border: '1px solid black',
                  borderRadius: '5px',
                  margin: '8px',
                  padding: '8px',
                  display: currentIndex() === student._id ? 'block' : 'none'
                }}
              >
                <RateStudentForm
                  student={student}
                  toggleRateForm={toggleRateForm}
                  hasNextStudent={hasNextStudent}
                  nextStudent={nextStudent}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
