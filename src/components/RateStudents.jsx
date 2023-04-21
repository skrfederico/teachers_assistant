import React, { useState } from 'react'
import { useStudentsStore } from '../store'
import { useParams } from 'react-router-dom'
import { RateStudentForm } from './RateStudent/RateStudentForm'
// import { RateModal } from './RateModal'
import { useRateStudents } from './RateStudent/RateStudents.hook'

// export default function RateStudents({ students, groupId, registers }) {
export default function RateStudents({ toggleRateForm }) {
  const { getAllStudents, deleteStudent, students } = useStudentsStore()
  const { id } = useParams()

  const [ratings, setRatings] = useState([])

  //TODO: enviar al controlador como metodo getStudentsByGroup
  const filteredStudents = students.filter((student) => student.group === id)

  const { currentIndex, hasNextStudent, nextStudent } =
    useRateStudents(filteredStudents)
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

// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { RateStudentForm } from './RateStudent/RateStudentForm'
// import { useRateStudents } from './RateStudent/RateStudents.hook'

// export default function RateStudents({ students, groupId, registers }) {
//   const { id } = useParams()
//   console.log('id from params is', id)

//   // const [ratings, setRatings] = useState([])
//   const { currentIndexStudent, hasNextStudent, nextStudent } =
//     useRateStudents(students)

//   // const handleRatingChange = (e) => {
//   //   const { name, value } = e.target
//   //   setRatings((prev) => ({ ...prev, [name]: value }))
//   // }

//   // const handleNextStudent = (student) => {
//   //   const currentIndex = students.indexOf(student)
//   //   if (currentIndex < students.length - 1) {
//   //     setCurrentStudent(students[currentIndex + 1])
//   //   } else {
//   //     setCurrentStudent(null)
//   //   }
//   // }

//   // const handleStartRating = () => {
//   //   if (filteredStudents.length > 0) {
//   //     setCurrentStudent(filteredStudents[0])
//   //   }
//   // }

//   // const handleSubmit = (e) => {
//   //   e.preventDefault()
//   //   console.log(ratings)
//   //   // Do something with the ratings
//   // }

//   // useEffect(() => {
//   //   handleStartRating()
//   // }, [])

//   // const filteredStudents = students.filter((student) => student.group === id)
//   // console.log(filteredStudents)

//   //TODO: enviar al controlador como metodo getStudentsByGroup
//   const filteredStudents = students.filter((student) => student.group === id)
//   console.log('filteredStudents :', filteredStudents)

//   return (
//     <div className="allstudents">
//       <div className="bottomContainer">
//         {filteredStudents.length === 0 ? (
//           <p>You have no students in this group!</p>
//         ) : (
//           <ul
//           // key={students.id}
//           >
//             {filteredStudents.map((student) => (
//               <div
//                 id={'unordered-list' + student.id}
//                 style={{
//                   border: '1px solid black',
//                   borderRadius: '5px',
//                   margin: '8px',
//                   padding: '8px',
//                   display:
//                     currentIndexStudent === students.indexOf(student)
//                       ? 'block'
//                       : 'none'
//                 }}
//               >
//                 <RateStudentForm student={student} />
//                 {hasNextStudent() && (
//                   <button onClick={nextStudent}>Next Student</button>
//                 )}
//               </div>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }
