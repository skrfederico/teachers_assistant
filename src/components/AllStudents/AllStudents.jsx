import React, { useEffect } from 'react'
import { useController } from '../../Controller'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './AllStudents.css'

export default function AllStudents() {
  const { getAllStudents, deleteStudent, students } = useController()
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
          <>
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Student name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Attendance
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    HW Completion
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Participation
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student._id}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      <a href={`/students/${student._id}`}>
                        {student.body}{' '}
                        <Link to={`/report/${student._id}`}>🔖</Link>
                      </a>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {student.averageAttendance} %
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {student.averageHwCompletion} %
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      {student.averageParticipation}
                    </td>
                    <td>
                      <button onClick={() => deleteStudent(student._id)}>
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  )
}
