import React from 'react'

import AverageAttendance from '../components/AverageAttendance'
import AverageHwCompletion from '../components/AverageHwCompletion'
import AverageParticipation from '../components/AverageParticipation'

export default function Report({ student }) {
  return (
    <>
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
          Homework completion: <strong>{student.averageHwCompletion} % </strong>
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
    </>
  )
}