// import React from 'react'

// import RegisterService from '../services/RegisterService'
// import { SelectInput } from '../components/RateStudent/SelectInput'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import registerService from '../services/RegisterService'

// export default function RateModal({ student, onClick }) {
//   const [showModal, setShowModal] = React.useState(false)
//   //adding this
//   const { id } = useParams()
//   const defaultD = 'D'
//   const [rateForm, setRateForm] = useState({
//     student: student._id,
//     group: id,
//     attendance: '',
//     hwCompletion: '',
//     participation: defaultD
//   })

//   const handleOnChange = (event) => {
//     setRateForm({ ...rateForm, [event.target.name]: event.target.value })
//     console.log(rateForm)
//   }

//   const handleOnSubmit = (event) => {
//     event.preventDefault()

//     console.log(rateForm)
//     registerService
//       .createRegister({
//         student: rateForm.student,
//         group: id,
//         // FIX THIS:
//         // attendance: rateForm.attendance === 'on' ? 'on' : 'off',
//         // hwCompletion: rateForm.hwCompletion === 'on' ? 'on' : 'off',
//         attendance: rateForm.attendance === 'on',
//         hwCompletion: rateForm.hwCompletion === 'on',
//         participation: rateForm.participation
//       })
//       .then((register) => {
//         alert('registro creado ' + register)
//         console.log(register)
//       })
//     alert('registro de alumno: ' + student.body)
//   }
//   //up to here
//   return (
//     <>
//       <button
//         className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         daily registers
//       </button>
//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-sm">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">
//                     {/* {student.body}  */}
//                     BRING IN STUDENT
//                   </h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <form
//                     className="my-4 text-slate-500 text-lg leading-relaxed"
//                     onSubmit={handleOnSubmit}
//                   >
//                     <div>
//                       <label class="inline-flex items-center">
//                         <span class="italic mr-2">Attendance :</span>
//                         <input
//                           type="checkbox"
//                           name="attendance"
//                           class="form-checkbox h-5 w-5 text-gray-600"
//                           onChange={handleOnChange}
//                         />
//                       </label>
//                     </div>
//                     <div>
//                       <label class="inline-flex items-center">
//                         <span class="italic mr-2">Homework Completion :</span>
//                         <input
//                           type="checkbox"
//                           name="hwCompletion"
//                           class="form-checkbox h-5 w-5 text-gray-600"
//                           onChange={handleOnChange}
//                         />
//                       </label>
//                     </div>
//                     <div>
//                       <SelectInput
//                         label={<span class="italic mr-2">Participation:</span>}
//                         name="participation"
//                         defaultD={defaultD}
//                         onChange={handleOnChange}
//                         options={[
//                           { value: 'A', textOutput: 'Excellent' },
//                           { value: 'B', textOutput: 'Good' },
//                           { value: 'C', textOutput: 'Above Average' },
//                           { value: 'D', textOutput: 'Average' },
//                           { value: 'E', textOutput: 'Below Average' },
//                           { value: 'F', textOutput: 'Poor' }
//                         ]}
//                       />
//                     </div>

//                     <button
//                       id={'button-submit-' + student.id}
//                       className="mt-6 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="submit"
//                     >
//                       Submit register{' '}
//                     </button>
//                   </form>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   )
// }
