import React, { useEffect } from 'react'
import { useController } from '../Controller'
import { useParams } from 'react-router-dom'

export default function AllStudents() {
  const { getAllStudents, deleteStudent, students, activeGroup, _id } =
    useController()
  const { id } = useParams()

  useEffect(() => {
    if (students.length >= 1) {
      getAllStudents()
    }
  }, [])

  const filteredStudents = students.filter((student) => student.group === id)

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
                <div key={student._id} className="single">
                  <div className="text">
                    <div className="textBody">
                      <a href={`/students/${student._id}`}>{student.body}</a>
                      <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>
                        {student.attendance}
                      </span>
                      <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>
                        {student.hwCompletion}
                      </span>
                      <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>
                        {student.participation}
                      </span>
                    </div>
                    <div className="textP">
                      <p onClick={() => deleteStudent(student._id)}>x</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
