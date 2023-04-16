import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import AverageAttendance from '../components/AverageAttendance'
import AverageHwCompletion from '../components/AverageHwCompletion'
import AverageParticipation from '../components/AverageParticipation'

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
          <h1 className="text-3xl text-blue-900">{student.body}'s report</h1>
          <section class="report">
            <p class="text-xl font-medium text-gray-800">
              Attendance: <strong>{student.averageAttendance} % </strong>
            </p>
            <p class="mt-3 text-base text-gray-600">
              <AverageAttendance student={student} />
            </p>
            <br></br>
            <p class="text-xl font-medium text-gray-800">
              Homework completion:{' '}
              <strong>{student.averageHwCompletion} % </strong>
            </p>
            <p class="mt-3 text-base text-gray-600">
              <AverageHwCompletion student={student} />
            </p>
            <p class="text-xl font-medium text-gray-800">
              <br></br>
              Participation: <strong>{student.averageParticipation}</strong>
            </p>
            <p class="mt-3 text-base text-gray-600">
              <AverageParticipation student={student} />
            </p>
          </section>

          <button
            onClick={handleClick}
            className="mt-6 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Send Email ✉️{' '}
          </button>
        </main>
      )}
    </>
  )
}
