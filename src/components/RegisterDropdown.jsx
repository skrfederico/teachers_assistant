// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// export function RegisterDropdown({ registers }) {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleDropdown = () => setIsOpen(!isOpen)

//   const alternatingColor = (index) => {
//     return index % 2 === 0 ? 'text-black' : 'text-gray-600'
//   }

//   return (
//     <div className="relative">
//       <button
//         className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//         onClick={toggleDropdown}
//       >
//         <svg
//           className="-ml-1 mr-2 h-5 w-5"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 12a2 2 0 100-4 2 2 0 000 4z"
//             clip-rule="evenodd"
//           />
//           <path
//             fillRule="evenodd"
//             d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-6a1 1 0 011 1v3a1 1 0 11-2 0V5a1 1 0 011-1zm0 10a1 1 0 100-2 1 1 0 000 2z"
//             clip-rule="evenodd"
//           />
//         </svg>
//         Registers
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
//           <ul className="py-1">
//             {registers.map((register, index) => (
//               <li key={register._id}>
//                 <Link
//                   to={`/registers/${register._id}`}
//                   className={`block px-4 py-2 text-sm ${alternatingColor(
//                     index
//                   )} hover:bg-gray-100`}
//                 >
//                   {new Date(register.date).toLocaleDateString()}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }
