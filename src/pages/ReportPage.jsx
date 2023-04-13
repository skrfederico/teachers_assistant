import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

// import AverageAttendance from '../components/AverageAttendance'
// import AverageHwCompletion from '../components/AverageHwCompletion'
// import AverageParticipation from '../components/AverageParticipation'

import { useController } from '../Controller'

export default function ReportPage() {
  const { getSingleStudent } = useController()
  const { id } = useParams()

  const [student, setStudent] = useState()

  useEffect(() => {
    if (id !== undefined) {
      function loadStudent() {
        getSingleStudent(id).then((student) => {
          setStudent(student)
        })
      }
      loadStudent()
    }
  }, [])
  console.log(student)

  return (
    <>
      {student && (
        <main>
          <h1>Report Page</h1>

          <section>
            <p>Name {student.body}</p>
            <p>Attendance {student.averageAttendance}</p>
            {/* <AverageAttendance /> */}
            <p>Homework {student.averageHwCompletion}</p>
            {/* <AverageHwCompletion /> */}
            <p>Participation {student.averageParticipation}</p>
            {/* <AverageParticipation /> */}
          </section>

          <button>Send Email ✉️</button>
        </main>
      )}
    </>
  )
}
