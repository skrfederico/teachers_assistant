// const database = [
//   {
//     student: 'Alice',
//     group: 'Children',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'B',
//     date: '2023-03-01'
//   },
//   {
//     student: 'Bob',
//     group: 'Adults',
//     attendance: false,
//     hwCompletion: true,
//     participation: 'C',
//     date: '2023-03-02'
//   },
//   {
//     student: 'Charlie',
//     group: 'Teens',
//     attendance: true,
//     hwCompletion: false,
//     participation: 'A',
//     date: '2023-03-03'
//   },
//   {
//     student: 'David',
//     group: 'Children',
//     attendance: false,
//     hwCompletion: false,
//     participation: 'D',
//     date: '2023-03-04'
//   },
//   {
//     student: 'Eve',
//     group: 'Teens',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'F',
//     date: '2023-03-05'
//   },
//   {
//     student: 'Frank',
//     group: 'Adults',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'E',
//     date: '2023-03-06'
//   },
//   {
//     student: 'Alice',
//     group: 'Children',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'A',
//     date: '2023-03-07'
//   },
//   {
//     student: 'Bob',
//     group: 'Adults',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'B',
//     date: '2023-03-08'
//   },
//   {
//     student: 'Charlie',
//     group: 'Teens',
//     attendance: false,
//     hwCompletion: false,
//     participation: 'C',
//     date: '2023-03-09'
//   },
//   {
//     student: 'David',
//     group: 'Children',
//     attendance: true,
//     hwCompletion: false,
//     participation: 'D',
//     date: '2023-03-10'
//   },
//   {
//     student: 'Eve',
//     group: 'Teens',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'F',
//     date: '2023-03-11'
//   },
//   {
//     student: 'Frank',
//     group: 'Adults',
//     attendance: true,
//     hwCompletion: false,
//     participation: 'E',
//     date: '2023-03-12'
//   },
//   {
//     student: 'Alice',
//     group: 'Children',
//     attendance: true,
//     hwCompletion: true,
//     participation: 'A',
//     date: '2023-03-13'
//   },
//   {
//     student: 'Bob',
//     group: 'Adults',
//     attendance: false,
//     hwCompletion: true,
//     participation: 'B',
//     date: '2023-03-14'
//   }
// ]
// NEW DATABASE TEST
//
const database = [
  [
    { attendance: true },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d36ad735cd628a10a51' },
    { hwCompletion: false },
    { participation: 'D' },
    { student: '64305ebaad735cd628a10a6b' },
    { __v: 1 },
    { _id: '643069890e7067f027122824' }
  ],
  [
    { attendance: false },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d36ad735cd628a10a51' },
    { hwCompletion: true },
    { participation: 'B' },
    { student: '64305ebfad735cd628a10a6d' },
    { __v: 1 },
    { _id: '6430698f0e7067f027122826' }
  ],
  [
    { attendance: true },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: true },
    { participation: 'A' },
    { student: '64305f30ad735cd628a10a8d' },
    { __v: 1 },
    { _id: '6430699f0e7067f02712282e' }
  ],
  [
    { attendance: false },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: false },
    { participation: 'C' },
    { student: '64305f34ad735cd628a10a8f' },
    { __v: 1 },
    { _id: '643069aa0e7067f027122830' }
  ],
  [
    { attendance: true },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: false },
    { participation: 'E' },
    { student: '64305f3cad735cd628a10a91' },
    { __v: 1 },
    { _id: '643069b20e7067f027122832' }
  ],
  [
    { attendance: false },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d7bad735cd628a10a56' },
    { hwCompletion: true },
    { participation: 'B' },
    { student: '643069c50e7067f02712283a' },
    { __v: 1 },
    { _id: '643069d40e7067f02712283e' }
  ],
  [
    { attendance: true },
    { date: '2023-04-05T18:36:52.260Z' },
    { group: '64305d7bad735cd628a10a56' },
    { hwCompletion: false },
    { participation: 'A' },

    { student: '643069cc0e7067f02712283c' },
    { __v: 0 },
    { _id: '643069dc0e7067f027122840' }
  ],
  [
    { attendance: true },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d36ad735cd628a10a51' },
    { hwCompletion: false },
    { participation: 'C' },
    { student: '64305ebaad735cd628a10a6b' },
    { __v: 1 },
    { _id: '743069890e7067f027122824' }
  ],
  [
    { attendance: true },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d36ad735cd628a10a51' },
    { hwCompletion: true },
    { participation: 'B' },
    { student: '64305ebfad735cd628a10a6d' },
    { __v: 2 },
    { _id: '7430698f0e7067f027122826' }
  ],
  [
    { attendance: false },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: false },
    { participation: 'A' },
    { student: '64305f30ad735cd628a10a8d' },
    { __v: 3 },
    { _id: '7430699f0e7067f02712282e' }
  ],
  [
    { attendance: true },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: false },
    { participation: 'D' },
    { student: '64305f34ad735cd628a10a8f' },
    { __v: 4 },
    { _id: '743069aa0e7067f027122830' }
  ],
  [
    { attendance: false },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: true },
    { participation: 'B' },
    { student: '64305f3cad735cd628a10a91' },
    { __v: 5 },
    { _id: '743069b20e7067f027122832' }
  ],
  [
    { attendance: true },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d7bad735cd628a10a56' },
    { hwCompletion: true },
    { participation: 'D' },
    { student: '643069c50e7067f02712283a' },
    { __v: 6 },
    { _id: '743069d40e7067f02712283e' }
  ],
  [
    { attendance: false },
    { date: '2023-04-06T18:36:52.260Z' },
    { group: '64305d7bad735cd628a10a56' },
    { hwCompletion: false },
    { participation: 'E' },
    { student: '643069cc0e7067f02712283c' },
    { __v: 0 },
    { _id: '643069dc0e7067f027122840' }
  ],
  [
    { attendance: true },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d36ad735cd628a10a51' },
    { hwCompletion: true },
    { participation: 'A' },
    { student: '64305ebaad735cd628a10a6b' },
    { __v: 0 },
    { _id: '643069890e7067f027122824' }
  ],
  [
    { attendance: true },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d36ad735cd628a10a51' },
    { hwCompletion: false },
    { participation: 'E' },
    { student: '64305ebfad735cd628a10a6d' },
    { __v: 0 },
    { _id: '6430698f0e7067f027122826' }
  ],
  [
    { attendance: false },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: true },
    { participation: 'E' },
    { student: '64305f30ad735cd628a10a8d' },
    { __v: 0 },
    { _id: '6430699f0e7067f02712282e' }
  ],
  [
    { attendance: true },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: true },
    { participation: 'B' },
    { student: '64305f34ad735cd628a10a8f' },
    { __v: 0 },
    { _id: '643069aa0e7067f027122830' }
  ],
  [
    { attendance: false },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d6ead735cd628a10a54' },
    { hwCompletion: false },
    { participation: 'E' },
    { student: '64305f3cad735cd628a10a91' },
    { __v: 0 },
    { _id: '643069b20e7067f027122832' }
  ],
  [
    { attendance: true },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d7bad735cd628a10a56' },
    { hwCompletion: false },
    { participation: 'C' },
    { student: '643069c50e7067f02712283a' },
    { __v: 0 },
    { _id: '643069d40e7067f02712283e' }
  ],
  [
    { attendance: false },
    { date: '2023-04-07T18:36:52.260Z' },
    { group: '64305d7bad735cd628a10a56' },
    { hwCompletion: false },
    { participation: 'E' },
    { student: '643069cc0e7067f02712283c' },
    { __v: 0 },
    { _id: '643069dc0e7067f027122840' }
  ]
]

// // NEW TEST THIS WORKS
// function createGroups(database) {
//   const groups = {}
//   const groupNames = []

//   for (const obj of database) {
//     const groupKey = obj.find((o) => o.group)?.group

//     if (groupKey) {
//       if (!groups[groupKey]) {
//         groups[groupKey] = new Set()
//         groupNames.push(groupKey)
//       }
//       const student = obj.find((o) => o.student)?.student
//       if (student && !groups[groupKey].has(student)) {
//         groups[groupKey].add(student)
//       }
//     }
//   }

//   for (let i = 0; i < groupNames.length; i++) {
//     const groupArr = Array.from(groups[groupNames[i]])
//     console.log(`Group ${i + 1}: ${groupArr.join(', ')}`)
//   }

//   return groupNames
// }

// const groupNames = createGroups(database)
// console.log(groupNames)

// //friday night tests new GOOD FOR ATTEND AND HW COMPLE
// function createGroups(database) {
//   const groups = {}
//   const groupNames = []

//   for (const obj of database) {
//     const groupKey = obj.find((o) => o.group)?.group

//     if (groupKey) {
//       if (!groups[groupKey]) {
//         groups[groupKey] = {
//           students: new Set(),
//           sessions: new Set(),
//           attendance: new Map(),
//           hwCompletion: new Map()
//         }
//         groupNames.push(groupKey)
//       }
//       const student = obj.find((o) => o.student)?.student
//       const date = obj.find((o) => o.date)?.date
//       if (student && !groups[groupKey].students.has(student)) {
//         groups[groupKey].students.add(student)
//         groups[groupKey].attendance.set(student, [])
//         groups[groupKey].hwCompletion.set(student, [])
//       }
//       if (date && !groups[groupKey].sessions.has(date)) {
//         groups[groupKey].sessions.add(date)
//         for (const student of groups[groupKey].students) {
//           groups[groupKey].attendance.get(student).push(false)
//           groups[groupKey].hwCompletion.get(student).push(false)
//         }
//       }
//       const attendance = obj.find((o) => o.attendance)?.attendance
//       const hwCompletion = obj.find((o) => o.hwCompletion)?.hwCompletion
//       if (
//         attendance !== undefined &&
//         student !== undefined &&
//         date !== undefined
//       ) {
//         groups[groupKey].attendance.get(student)[
//           groups[groupKey].attendance.get(student).length - 1
//         ] = attendance
//       }
//       if (
//         hwCompletion !== undefined &&
//         student !== undefined &&
//         date !== undefined
//       ) {
//         groups[groupKey].hwCompletion.get(student)[
//           groups[groupKey].hwCompletion.get(student).length - 1
//         ] = hwCompletion
//       }
//     }
//   }

//   for (let i = 0; i < groupNames.length; i++) {
//     const groupSessions = Array.from(groups[groupNames[i]].sessions).length
//     console.log(`Group ${i + 1}: Sessions: ${groupSessions}`)
//   }

//   return groups
// }

// function averageAttendance(groups) {
//   for (const groupName in groups) {
//     const group = groups[groupName]
//     console.log(`Group ${groupName} Attendance:`)
//     for (const student of group.students) {
//       const numAttended = group.attendance.get(student).filter(Boolean).length
//       const attendancePercentage = (numAttended / group.sessions.size) * 100
//       console.log(
//         `${student}: ${attendancePercentage.toFixed(2)}% (${numAttended}/${
//           group.sessions.size
//         })`
//       )
//     }
//   }
// }

// function averageHwCompletion(groups) {
//   for (const groupName in groups) {
//     const group = groups[groupName]
//     console.log(`Group ${groupName} HW Completion:`)
//     for (const student of group.students) {
//       const numCompleted = group.hwCompletion
//         .get(student)
//         .filter(Boolean).length
//       const hwCompletionPercentage = (numCompleted / group.sessions.size) * 100
//       console.log(
//         `${student}: ${hwCompletionPercentage.toFixed(2)}% (${numCompleted}/${
//           group.sessions.size
//         })`
//       )
//     }
//   }
// }

// const groups = createGroups(database)
// averageAttendance(groups)
// averageHwCompletion(groups)

//ULTIMATE LONG 2 PARTS CODE GENERAL AND FUNCTIONS
function createGroups(database) {
  const groups = {}
  const groupNames = []

  for (const obj of database) {
    const groupKey = obj.find((o) => o.group)?.group

    if (groupKey) {
      if (!groups[groupKey]) {
        groups[groupKey] = {
          students: new Set(),
          sessions: new Set(),
          attendance: {},
          hwCompletion: {},
          participation: {}
        }
        groupNames.push(groupKey)
      }
      const student = obj.find((o) => o.student)?.student
      const date = obj.find((o) => o.date)?.date
      const attendance = obj.find((o) => o.attendance)?.attendance
      const hwCompletion = obj.find((o) => o.hwCompletion)?.hwCompletion
      const participation = obj.find((o) => o.participation)?.participation

      if (student && !groups[groupKey].students.has(student)) {
        groups[groupKey].students.add(student)
      }
      if (date && !groups[groupKey].sessions.has(date)) {
        groups[groupKey].sessions.add(date)
      }
      if (attendance && student) {
        if (!groups[groupKey].attendance[student]) {
          groups[groupKey].attendance[student] = 0
        }
        groups[groupKey].attendance[student] += 1
      }
      if (hwCompletion && student) {
        if (!groups[groupKey].hwCompletion[student]) {
          groups[groupKey].hwCompletion[student] = 0
        }
        groups[groupKey].hwCompletion[student] += 1
      }
      if (participation && student) {
        if (!groups[groupKey].participation[student]) {
          groups[groupKey].participation[student] = []
        }
        groups[groupKey].participation[student].push(participation)
      }
    }
  }

  for (let i = 0; i < groupNames.length; i++) {
    const groupSessions = Array.from(groups[groupNames[i]].sessions).length
    console.log(`Group ${i + 1}: Sessions: ${groupSessions}`)
  }

  return groups
}
// EXTRA ATTEND AND PARTICIP
// function averageAttendance(groupName, groups) {
//   const group = groups[groupName]
//   const attendance = group.attendance
//   const numSessions = Array.from(group.sessions).length
//   for (const student in attendance) {
//     const count = attendance[student]
//     const percentage = ((count / numSessions) * 100).toFixed(2)
//     console.log(`Group ${groupName}: ${student} attendance: ${percentage}%`)
//   }
// }

// function averageHwCompletion(groupName, groups) {
//   const group = groups[groupName]
//   const hwCompletion = group.hwCompletion
//   const numSessions = Array.from(group.sessions).length
//   for (const student in hwCompletion) {
//     const count = hwCompletion[student]
//     const percentage = ((count / numSessions) * 100).toFixed(2)
//     console.log(`Group ${groupName}: ${student} hwCompletion: ${percentage}%`)
//   }
// }

// function averageParticipation(groupName, groups) {
//   const group = groups[groupName]
//   const participation = group.participation
//   for (const student in participation) {
//     const ratings = participation[student]
//     const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0)
//     const averageRating = (totalRatings / ratings.length).toFixed(2)
//     console.log(
//       `Group ${groupName}: ${student} average participation rating: ${averageRating}`
//     )
//   }
// }

// const groups = createGroups(database)
// console.log(groups)

//11.30 pm WORKING FUNCTIONS
function getSessionsForGroup(database, groupName) {
  const sessions = new Set()
  for (const obj of database) {
    if (obj.find((o) => o.group)?.group === groupName) {
      const date = obj.find((o) => o.date)?.date
      if (date) {
        sessions.add(date)
      }
    }
  }
  return sessions
}
function getAttendanceRecordsForStudent(database, groupName, studentName) {
  const attendanceRecords = []
  for (const obj of database) {
    if (obj.find((o) => o.group)?.group === groupName) {
      const student = obj.find((o) => o.student)?.student
      const date = obj.find((o) => o.date)?.date
      const attendance = obj.find((o) => o.attendance)?.attendance
      if (student === studentName && date && attendance) {
        attendanceRecords.push(attendance)
      }
    }
  }
  return attendanceRecords
}
function averageAttendance(database, groupName, studentName) {
  const sessions = getSessionsForGroup(database, groupName)
  const attendanceRecords = getAttendanceRecordsForStudent(
    database,
    groupName,
    studentName
  )
  const attendanceCount = attendanceRecords.filter(
    (attendance) => attendance === true
  ).length
  const attendancePercentage = (attendanceCount / sessions.size) * 100
  console.log(
    `${studentName}'s attendance percentage for group ${groupName}: ${attendancePercentage.toFixed(
      2
    )}%`
  )
}
averageAttendance(
  database,
  '64305d36ad735cd628a10a51',
  '64305ebfad735cd628a10a6d'
)

function getHwCompletionRecordsForStudent(database, groupName, studentName) {
  const hwCompletionRecords = []
  for (const obj of database) {
    if (obj.find((o) => o.group)?.group === groupName) {
      const student = obj.find((o) => o.student)?.student
      const date = obj.find((o) => o.date)?.date
      const hwCompletion = obj.find((o) => o.hwCompletion)?.hwCompletion
      if (student === studentName && date && hwCompletion) {
        hwCompletionRecords.push(hwCompletion)
      }
    }
  }
  return hwCompletionRecords
}

function averageHwCompletion(database, groupName, studentName) {
  const sessions = getSessionsForGroup(database, groupName)
  const hwCompletionRecords = getHwCompletionRecordsForStudent(
    database,
    groupName,
    studentName
  )
  const hwCompletionCount = hwCompletionRecords.filter(
    (hwCompletion) => hwCompletion
  ).length
  const hwCompletionPercentage = (hwCompletionCount / sessions.size) * 100
  console.log(
    `${studentName}'s average hw completion percentage for group ${groupName} is: ${hwCompletionPercentage.toFixed(
      2
    )}%`
  )
  return hwCompletionPercentage
}
// Example usage:
averageHwCompletion(
  database,
  '64305d36ad735cd628a10a51',
  '64305ebaad735cd628a10a6b'
)

function getParticipationRecordsForStudent(database, groupName, studentName) {
  const participationRecords = []
  for (const obj of database) {
    if (obj.find((o) => o.group)?.group === groupName) {
      const student = obj.find((o) => o.student)?.student
      const participation = obj.find((o) => o.participation)?.participation
      if (student === studentName && participation) {
        participationRecords.push(participation)
      }
    }
  }
  return participationRecords
}

function getGradeFromParticipation(participation) {
  switch (participation) {
    case 'A':
      return 5.0
    case 'B':
      return 4.0
    case 'C':
      return 3.0
    case 'D':
      return 2.0
    case 'E':
      return 1.0
    case 'F':
      return 0.0
    default:
      return NaN
  }
}

function averageParticipation(database, groupName, studentName) {
  const participationRecords = getParticipationRecordsForStudent(
    database,
    groupName,
    studentName
  )
  const grades = participationRecords.map((participation) =>
    getGradeFromParticipation(participation)
  )
  const averageGrade =
    grades.reduce((sum, grade) => sum + grade, 0) / grades.length
  console.log(
    `${studentName}'s average grade for participation in group ${groupName} is: ${averageGrade.toFixed(
      1
    )}`
  )
  return averageGrade
}
averageParticipation(
  database,
  '64305d6ead735cd628a10a54',
  '64305f30ad735cd628a10a8d'
)
// GROUP STRINGS
// Group: 64305d36ad735cd628a10a51
// Group: 64305d6ead735cd628a10a54
// Group: 64305d7bad735cd628a10a56
//
// Group 1: 64305ebaad735cd628a10a6b, 64305ebfad735cd628a10a6d
// Group 2: 64305f30ad735cd628a10a8d, 64305f34ad735cd628a10a8f, 64305f3cad735cd628a10a91
// Group 3: 643069c50e7067f02712283a, 643069cc0e7067f02712283c
