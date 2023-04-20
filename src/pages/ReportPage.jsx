import React, { useEffect, useState } from 'react'
import ReactDomServer from 'react-dom/server'
import { useParams } from 'react-router-dom'

import { useStudentsStore } from '../store'
import Report from '../components/Report'
import { sendEmail } from '../services/EmailService'

export default function ReportPage() {
  const { getSingleStudent } = useStudentsStore()
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
    sendEmail(
      // 'fedeinnyc@gmail',
      '${student.email}',
      `${student.body} 's report`,
      ReactDomServer.renderToString(<Report student={student} />)
    ).then(() => {
      alert('Email was sent')
    })
  }
  return (
    <>
      {student && (
        <main>
          <Report student={student} />

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
