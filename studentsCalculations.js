const databaseAlt = [
  {
    student: 'Alice',
    group: 'Children',
    attendance: true,
    hwCompletion: true,
    participation: 'B',
    date: '2023-03-01'
  },
  {
    student: 'Bob',
    group: 'Adults',
    attendance: false,
    hwCompletion: true,
    participation: 'C',
    date: '2023-03-02'
  },
  {
    student: 'Charlie',
    group: 'Teens',
    attendance: true,
    hwCompletion: false,
    participation: 'A',
    date: '2023-03-03'
  },
  {
    student: 'David',
    group: 'Children',
    attendance: false,
    hwCompletion: false,
    participation: 'D',
    date: '2023-03-04'
  },
  {
    student: 'Eve',
    group: 'Teens',
    attendance: true,
    hwCompletion: true,
    participation: 'F',
    date: '2023-03-05'
  },
  {
    student: 'Frank',
    group: 'Adults',
    attendance: true,
    hwCompletion: true,
    participation: 'E',
    date: '2023-03-06'
  },
  {
    student: 'Alice',
    group: 'Children',
    attendance: true,
    hwCompletion: true,
    participation: 'A',
    date: '2023-03-07'
  },
  {
    student: 'Bob',
    group: 'Adults',
    attendance: true,
    hwCompletion: true,
    participation: 'B',
    date: '2023-03-08'
  },
  {
    student: 'Charlie',
    group: 'Teens',
    attendance: false,
    hwCompletion: false,
    participation: 'C',
    date: '2023-03-09'
  },
  {
    student: 'David',
    group: 'Children',
    attendance: true,
    hwCompletion: false,
    participation: 'D',
    date: '2023-03-10'
  },
  {
    student: 'Eve',
    group: 'Teens',
    attendance: true,
    hwCompletion: true,
    participation: 'F',
    date: '2023-03-11'
  },
  {
    student: 'Frank',
    group: 'Adults',
    attendance: true,
    hwCompletion: false,
    participation: 'E',
    date: '2023-03-12'
  },
  {
    student: 'Alice',
    group: 'Children',
    attendance: true,
    hwCompletion: true,
    participation: 'A',
    date: '2023-03-13'
  },
  {
    student: 'Bob',
    group: 'Adults',
    attendance: false,
    hwCompletion: true,
    participation: 'B',
    date: '2023-03-14'
  }
]

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
// LOGIC 1
// createStudentArrays(database)

// function createStudentArrays(database) {
//   const children = new Set()
//   const teens = new Set()
//   const adults = new Set()

//   for (const entry of database) {
//     const { student, group } = entry
//     if (group === 'Children') {
//       children.add(student)
//     } else if (group === 'Teens') {
//       teens.add(student)
//     } else if (group === 'Adults') {
//       adults.add(student)
//     }
//   }

//   console.log('Children:', Array.from(children))
//   console.log('Teens:', Array.from(teens))
//   console.log('Adults:', Array.from(adults))
// }

// function logGroupStats(database, group) {
//   const groupEntries = database.filter((entry) => entry.group === group)
//   const totalClasses = groupEntries.length

//   const attendanceStats = {}
//   const hwCompletionStats = {}
//   const participationStats = {}

//   groupEntries.forEach((entry) => {
//     const { student, attendance, hwCompletion, participation } = entry
//     attendanceStats[student] =
//       (attendanceStats[student] || 0) + (attendance ? 1 : 0)
//     hwCompletionStats[student] =
//       (hwCompletionStats[student] || 0) + (hwCompletion ? 1 : 0)
//     participationStats[student] = participationStats[student] || []
//     participationStats[student].push(participation)
//   })

//   const attendanceOutput = {}
//   const hwCompletionOutput = {}
//   const participationOutput = {}

//   Object.keys(attendanceStats).forEach((student) => {
//     const attendancePercentage = (
//       (attendanceStats[student] / totalClasses) *
//       100
//     ).toFixed(2)
//     const hwCompletionPercentage = (
//       (hwCompletionStats[student] / totalClasses) *
//       100
//     ).toFixed(2)
//     const avgParticipationGrade =
//       participationStats[student].reduce((total, grade) => {
//         const gradeValue = {
//           A: 5.0,
//           B: 4.0,
//           C: 3.0,
//           D: 2.0,
//           E: 1.0,
//           F: 0.0
//         }[grade]
//         return total + gradeValue
//       }, 0) / totalClasses
//     const avgParticipationLetter = Object.entries({
//       A: 5.0,
//       B: 4.0,
//       C: 3.0,
//       D: 2.0,
//       E: 1.0,
//       F: 0.0
//     }).reduce(
//       (result, [letter, value]) => {
//         if (
//           Math.abs(avgParticipationGrade - value) <
//           Math.abs(avgParticipationGrade - result.value)
//         ) {
//           return { letter, value }
//         } else {
//           return result
//         }
//       },
//       { letter: null, value: Number.MAX_SAFE_INTEGER }
//     ).letter

//     attendanceOutput[student] = `${attendancePercentage}%`
//     hwCompletionOutput[student] = `${hwCompletionPercentage}%`
//     participationOutput[student] = avgParticipationLetter
//   })

//   console.log(`Group: ${group}`)
//   console.log('List of Students:')

//   Object.keys(attendanceOutput).forEach((student) => {
//     console.log(
//       `${student}: attendance: ${attendanceOutput[student]}, hwCompletion: ${hwCompletionOutput[student]}, participation: ${participationOutput[student]}`
//     )
//   })
// }

// logGroupStats(database, 'Children')
// logGroupStats(database, 'Teens')
// logGroupStats(database, 'Adults')

//LOGIC 2
// function logGroupStats(database, group) {
//   const groupEntries = database.filter((entry) => entry[1].group === group)
//   const totalClasses = groupEntries.length

//   const attendanceStats = {}
//   const hwCompletionStats = {}
//   const participationStats = {}

//   groupEntries.forEach((entry) => {
//     const student = entry[5].student
//     const attendance = entry[0].attendance
//     const hwCompletion = entry[3].hwCompletion
//     const participation = entry[4].participation
//     attendanceStats[student] =
//       (attendanceStats[student] || 0) + (attendance ? 1 : 0)
//     hwCompletionStats[student] =
//       (hwCompletionStats[student] || 0) + (hwCompletion ? 1 : 0)
//     participationStats[student] = participationStats[student] || []
//     participationStats[student].push(participation)
//   })

//   const attendanceOutput = {}
//   const hwCompletionOutput = {}
//   const participationOutput = {}

//   Object.keys(attendanceStats).forEach((student) => {
//     const attendancePercentage = (
//       (attendanceStats[student] / totalClasses) *
//       100
//     ).toFixed(2)
//     const hwCompletionPercentage = (
//       (hwCompletionStats[student] / totalClasses) *
//       100
//     ).toFixed(2)
//     const avgParticipationGrade =
//       participationStats[student].reduce((total, grade) => {
//         const gradeValue = {
//           A: 5.0,
//           B: 4.0,
//           C: 3.0,
//           D: 2.0,
//           E: 1.0,
//           F: 0.0
//         }[grade]
//         return total + gradeValue
//       }, 0) / totalClasses
//     const avgParticipationLetter = Object.entries({
//       A: 5.0,
//       B: 4.0,
//       C: 3.0,
//       D: 2.0,
//       E: 1.0,
//       F: 0.0
//     }).reduce(
//       (result, [letter, value]) => {
//         if (
//           Math.abs(avgParticipationGrade - value) <
//           Math.abs(avgParticipationGrade - result.value)
//         ) {
//           return { letter, value }
//         } else {
//           return result
//         }
//       },
//       { letter: null, value: Number.MAX_SAFE_INTEGER }
//     ).letter

//     attendanceOutput[student] = `${attendancePercentage}%`
//     hwCompletionOutput[student] = `${hwCompletionPercentage}%`
//     participationOutput[student] = avgParticipationLetter
//   })

//   console.log(`Group: ${group}`)
//   console.log('List of Students...')
//   Object.keys(attendanceOutput).forEach((student) => {
//     console.log(
//       `- ${student}: Attendance ${attendanceOutput[student]}, HW Completion ${hwCompletionOutput[student]}, Participation ${participationOutput[student]}`
//     )
//   })
// }

function createGroups(database) {
  const groups = {}
  const groupNames = []

  for (const obj of database) {
    const groupKey = obj.find((o) => o.group)?.group

    if (groupKey) {
      if (!groups[groupKey]) {
        groups[groupKey] = new Set()
        groupNames.push(groupKey)
      }
      const student = obj.find((o) => o.student)?.student
      if (student && !groups[groupKey].has(student)) {
        groups[groupKey].add(student)
      }
    }
  }

  for (let i = 0; i < groupNames.length; i++) {
    const groupArr = Array.from(groups[groupNames[i]])
    console.log(`Group ${i + 1}: ${groupArr.join(', ')}`)
  }

  return groupNames
}

const groupNames = createGroups(database)
console.log(groupNames)
