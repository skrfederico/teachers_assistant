import React from 'react'

import AverageAttendance from '../components/AverageAttendance'
import AverageHwCompletion from '../components/AverageHwCompletion'
import AverageParticipation from '../components/AverageParticipation'

export default function Report({ student }) {
  return (
    <>
      <h1 className="text-3xl text-blue-900">{student.body}'s report</h1>
      <section className="report">
        <div className="text-xl font-medium text-gray-800">
          Attendance: <strong>{student.averageAttendance} % </strong>
        </div>
        <div className="mt-3 text-base text-gray-600">
          <AverageAttendance student={student} />
        </div>
        <br></br>
        <div className="text-xl font-medium text-gray-800">
          Homework completion: <strong>{student.averageHwCompletion} % </strong>
        </div>
        <div className="mt-3 text-base text-gray-600">
          <AverageHwCompletion student={student} />
        </div>
        <div className="text-xl font-medium text-gray-800">
          <br></br>
          Participation: <strong>{student.averageParticipation}</strong>
        </div>
        <div className="mt-3 text-base text-gray-600">
          <AverageParticipation student={student} />
        </div>
      </section>
    </>
  )
}
