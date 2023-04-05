import React, { useEffect } from 'react'
import { useController } from '../Controller'

export default function AllGroups() {
  const { getAllGroups, deleteGroup, groups } = useController()

  useEffect(() => {
    if (groups.length >= 1) {
      getAllGroups()
    }
  }, [])

  // const handleDelete = (event, id) => {
  //   event.preventDefault()
  //   deleteGroup(id)
  // }

  return (
    <div className="allgroups">
      <div className="bottomContainer">
        {groups.length < 1 && <p>You have no groups!</p>}
        {groups.length > 1 && (
          <ul>
            {groups
              .filter((i) => !i.completed)
              .map((group) => {
                return (
                  <div key={group._id} className="single">
                    <div className="text">
                      <div className="textBody">
                        <a href={`/groups/${group._id}`}>{group.body}</a>
                      </div>
                      <div className="textP">
                        <p onClick={(event) => deleteGroup(group._id)}>x</p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </ul>
        )}
      </div>
    </div>
  )
}

// import React, { useEffect } from 'react'

// import { useController } from '../Controller'

// export default function AllGroups() {
//   const {
//     getAllGroups,
//     deleteGroup,
//     groups
//     // completeGroup
//   } = useController()

//   useEffect(() => {
//     if (groups.length <= 1) {
//       getAllGroups()
//     }
//   }, [])

//   return (
//     <div className="allgroups">
//       <div className="bottomContainer">
//         {/* {groups.length === 0 && <p>You have no groups! Add your first one.</p>}
//         {groups.length > 0 && ( */}
//         {groups.length < 1 && <p>You have no groups!</p>}
//         {groups.length > 1 && (
//           <ul>
//             {groups
//               .filter((i) => !i.completed)
//               .map((group) => {
//                 return (
//                   <div className="single" key={group._id}>
//                     <div className="text">
//                       <div className="textBody">
//                         <p>{group.body}</p>
//                       </div>
//                       <div className="textP">
//                         <p onClick={() => deleteGroup(group._id)}>x</p>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }

//simpler but doesn't work either
// import React, { useEffect, useState } from 'react'

// import { useController } from '../Controller'

// export default function AllGroups() {
//   const {
//     groups,
//     getAllGroups,
//     deleteGroup
//     // completeGroup
//   } = useController()

//   useEffect(() => {
//     // if (groups.length > 1) {
//     getAllGroups()
//     // }
//   }, [
//     getAllGroups
//     //groups
//   ])

//   return (
//     <div className="allgroups">
//       <div className="bottomContainer">
//         {/* {groups.length < 1 && <p>You have no groups!</p>}
//         {groups.length > 1 && ( */}
//         <ul>
//           {/* {groups
//             .filter((i) => !i.completed) */}
//           {/* .map((group) => {
//               return ( */}
//           {groups.map((group) => (
//             <div className="single" key={group._id}>
//               <div className="text">
//                 <div className="textBody">
//                   <p>{group.body}</p>
//                 </div>
//                 <div className="textP">
//                   <p onClick={() => deleteGroup(group._id)}>x</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* })} */}
//         </ul>
//         {/* // )
//         } */}
//       </div>
//     </div>
//   )
// }
