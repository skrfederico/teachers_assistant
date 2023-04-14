import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import AverageAttendance from '../components/AverageAttendance'
import AverageHwCompletion from '../components/AverageHwCompletion'
import AverageParticipation from '../components/AverageParticipation'

// import { createEmail } from ''
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
  // console.log('this is student.mail', student.email)
  const handleClick = async () => {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        receiver: 'fedeinnyc@gmail.com',
        subject: 'Your subject',
        message: 'Your message'
      })
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      {student && (
        <main>
          <h1 className="text-3xl text-blue-900">Report Page</h1>

          <section>
            <p>Name {student.body}</p>
            <p>Attendance {student.averageAttendance}</p>
            <AverageAttendance student={student} />
            <p>Homework {student.averageHwCompletion}</p>
            <AverageHwCompletion student={student} />
            <p>Participation {student.averageParticipation}</p>
            <AverageParticipation student={student} />
          </section>

          <button onClick={handleClick}>Send Email ✉️</button>
        </main>
      )}
    </>
  )
}
